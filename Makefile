.PHONY: install start start-prod-api build preview clean deployments-list deployments-remove worker-dev worker-deploy worker-tail worker-secrets

PROD_AI_WORKER_URL := https://mtech-ai-proxy.mtechltd2021.workers.dev

install: ## Install npm dependencies
	npm install

start: ## Run the dev server (http://localhost:3000)
	npm start

build: ## Type-check and build for production into build/
	npm run build

preview: build ## Build then preview the production build locally
	npm run preview

clean: ## Remove build output and installed dependencies
	rm -rf build node_modules

deployments-list: ## List GitHub Pages deployments (requires gh CLI auth)
	./scripts/getDeployments.sh

deployments-remove: ## Remove deployments created by LOGIN, e.g. make deployments-remove LOGIN=m-tech-ltd
	python3 scripts/remove_deployments.py $(LOGIN)

worker-dev: ## Run the AI chat proxy Worker locally (needs workers/ai-proxy/.dev.vars, see its README)
	cd workers/ai-proxy && wrangler dev

worker-deploy: ## Deploy the AI chat proxy Worker to Cloudflare
	cd workers/ai-proxy && wrangler deploy

worker-tail: ## Tail live logs from the deployed AI chat proxy Worker
	cd workers/ai-proxy && wrangler tail

worker-secrets: ## Set the AI chat Worker's API secrets (prompts interactively)
	cd workers/ai-proxy && wrangler secret put AI_API_KEY && wrangler secret put AI_BASE_URL && wrangler secret put AI_MODEL

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
