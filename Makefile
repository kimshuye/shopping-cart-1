frontend: install_dependency_frontend code_analysis_frontend run_unittest_frontend build_frontend
frontend_vue: install_dependency_frontend_vue code_analysis_frontend_vue run_unittest_frontend_vue build_frontend_vue
backend: code_analysis_backend run_unittest_backend run_integratetest_backend build_backend start_service run_newman stop_service

run_robot: 
	robot atdd/ui/shopping_cart_success.robot

run_newman: 
	sleep 15
	cat tearup/init.sql | docker exec -i store-database /usr/bin/mysql -u sealteam --password=sckshuhari --default-character-set=utf8  toy
	newman run atdd/api/shopping_cart_success.json -e atdd/api/environment/local_environment.json -d atdd/api/data/shopping_cart_success.json

install_dependency_frontend:
	cd store-web && npm install

code_analysis_frontend:
	cd store-web && npm run lint

run_unittest_frontend:
	cd store-web && npm test

build_frontend:
	docker-compose build store-web

build_frontend_vue_for_test:
	cd store-web-vue && docker build -f ${PWD}/store-web-vue/Dockerfile.dev --tag tokdev/shopping-cart-1/store-web-vue:dev0.0.1 ${PWD}/store-web-vue

install_dependency_frontend_vue:
	cd store-web-vue && docker run -v ${PWD}/store-web-vue:/usr/src/app -w /usr/src/app tokdev/shopping-cart-1/store-web-vue:dev0.0.1 npm install

code_analysis_frontend_vue:
	cd store-web-vue && docker run -v ${PWD}/store-web-vue:/usr/src/app -w /usr/src/app tokdev/shopping-cart-1/store-web-vue:dev0.0.1 npm run lint

run_unittest_frontend_vue:
	cd store-web-vue && docker run -v ${PWD}/store-web-vue:/usr/src/app -w /usr/src/app tokdev/shopping-cart-1/store-web-vue:dev0.0.1 npm run test:unit

run_unittest_watch_frontend_vue:
	cd store-web-vue && npm run test:unit:watch

build_frontend_vue:
	docker-compose build store-web-vue



code_analysis_backend:
	cd store-service && go vet ./...

run_unittest_backend:
	cd store-service && go test ./... -v

run_integratetest_backend:
	docker-compose up -d store-database bank-gateway shipping-gateway
	sleep 12
	cat tearup/init.sql | docker exec -i store-database /usr/bin/mysql -u sealteam --password=sckshuhari --default-character-set=utf8  toy
	cd store-service && go test -tags=integration ./...
	docker-compose down

build_backend:
	docker-compose build store-service

start_service:
	docker-compose up -d

status_service:
	docker-compose ps

seed:
	cat tearup/init.sql | docker exec -i store-database /usr/bin/mysql -u sealteam --password=sckshuhari --default-character-set=utf8  toy

stop_service:
	docker-compose down

deploy:
	kubectl apply -f deploy/mysql-service.yml
	kubectl apply -f deploy/mysql-deployment.yml
	kubectl rollout status deployments/store-database-deployment
	kubectl apply -f deploy/bank-gateway.yml
	kubectl rollout status deployments/bank-gateway
	kubectl apply -f deploy/shipping-gateway.yml
	kubectl rollout status deployments/shipping-gateway
	kubectl apply -f deploy/store-service-service.yml
	kubectl apply -f deploy/store-service-deployment.yml
	kubectl rollout status deployments/store-service
	kubectl apply -f deploy/store-web-service.yml
	kubectl apply -f deploy/store-web-deployment.yml
	kubectl rollout status deployments/store-web
	kubectl apply -f deploy/store-loadbalancer-service.yml
	kubectl apply -f deploy/store-loadbalancer-deployment.yml
	kubectl rollout status deployments/store-loadbalancer

seed-k8s:
	cat tearup/init.sql | kubectl exec -it 