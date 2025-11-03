#!/usr/bin/env python3
# python
# script to get deployments info
# gh api   --method GET
# -H "Accept: application/vnd.github+json"
# -H "X-GitHub-Api-Version: 2022-11-28"
# /repos/m-tech-org/m-tech-org.github.io/deployments

import sys
import json
import subprocess
import shutil
from pathlib import Path
from datetime import datetime

FILE = Path(__file__).resolve().parent / 'git_deployments.json'

def append_error(text: str) -> None:
    print(f"Error {text}")

def load_json(path_arg: str):
    path = Path(path_arg) if path_arg else FILE
    try:
        return json.loads(path.read_text(encoding="utf8"))
    except Exception as e:
        raise RuntimeError(f"Failed to read/parse JSON from {path}: {e}")

def extract_items(data):
    if isinstance(data, list):
        items = data
    elif isinstance(data, dict):
        items = next((v for v in data.values() if isinstance(v, list)), [])
    else:
        items = []
    return [it for it in items if it.get("creator", {}).get("login") == TARGET_LOGIN and "id" in it]

def delete_deployment(deployment_id: int):
    gh_cmd = [
        "gh", "api",
        "--method", "DELETE",
        "-H", "Accept: application/vnd.github+json",
        "-H", "X-GitHub-Api-Version: 2022-11-28",
        f"/repos/m-tech-org/m-tech-org.github.io/deployments/{deployment_id}"
    ]
    proc = subprocess.run(gh_cmd, capture_output=True, text=True)
    return proc.returncode or 0, proc.stdout or "", proc.stderr or ""

def main():
    if shutil.which("gh") is None:
        print("Error: `gh` CLI not found in PATH", file=sys.stderr)
        sys.exit(1)

    path_arg = sys.argv[1] if len(sys.argv) > 1 else None
    try:
        data = load_json(path_arg)
    except Exception as e:
        print("Error:", e, file=sys.stderr)
        append_error(str(e))
        sys.exit(1)

    items = extract_items(data)
    if not items:
        print("No matching deployments found for login:", TARGET_LOGIN)
        return

    deleted = 0
    failed = 0
    for idx, item in enumerate(items):
        deployment_id = str(item["id"])
        print(f"[{idx+1}/{len(items)}] Deleting deployment id: {deployment_id}")
        try:
            rc, out, err = delete_deployment(deployment_id)
            if rc == 0:
                deleted += 1
            else:
                failed += 1
                msg = (f"Failed to delete id={deployment_id} rc={rc} stdout={out.strip()} stderr={err.strip()}")
                print("Error:", msg, file=sys.stderr)
                append_error(msg)
        except Exception as e:
            failed += 1
            msg = f"Exception deleting id={deployment_id}: {e}"
            print("Error:", msg, file=sys.stderr)
            append_error(msg)

    print(f"Done. deleted={deleted} failed={failed}")

if __name__ == "__main__":
    main()
