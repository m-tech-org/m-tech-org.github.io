#!/bin/bash

# script to get deployments info
gh api   --method GET -H "Accept: application/vnd.github+json" -H "X-GitHub-Api-Version: 2022-11-28" /repos/m-tech-org/m-tech-org.github.io/deployments