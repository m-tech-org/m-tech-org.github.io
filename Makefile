.PHONY: install start build preview clean deployments-list deployments-remove

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

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
