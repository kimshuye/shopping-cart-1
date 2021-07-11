# backend: code_analysis_backend run_unittest_backend run_integratetest_backend build_backend start_service run_robot_requests stop_service
backend: code_analysis_backend run_unittest_backend run_integratetest_backend build_backend start_service run_integratetest_backend_by_robot stop_service

run_robot_selinium:
	/bin/bash
	python3 -m pip3 install -r requirements.txt
	make build_backend
	docker-compose up -d store-cache store-service store-web store-nginx
	python3 -m robot atdd/ui-robot/shopping_cart_success.robot

run_robot_requests:
	make build_backend
	docker-compose up -d store-cache store-service
	python3 -m robot atdd/api-robot/shopping-cart-sucess.robot

code_analysis_backend:
	docker network create mini-shopping-cart_default | true
	cd store-service && docker build -t toy-store-service:0.0.2 -f Dockerfile.run .
	cd store-service && docker run --name store-service_1 --network=mini-shopping-cart_default --rm -v "${PWD}/store-service":/usr/src/myapp -w /usr/src/myapp toy-store-service:0.0.2 go vet internal/...
	# cd store-service && go vet internal/...

run_unittest_backend:
	docker network create mini-shopping-cart_default | true
	cd store-service && docker run --name store-service_1 --network=mini-shopping-cart_default --rm -v "${PWD}/store-service":/usr/src/myapp -w /usr/src/myapp toy-store-service:0.0.2 go test internal/... -v
	# cd store-service && go test internal/... -v

run_integratetest_backend:
	docker network create mini-shopping-cart_default | true
	docker-compose up -d store-database bank-gateway shipping-gateway
	sleep 20
	cat tearup/init.sql | docker exec -i store-database mysql --host=127.0.0.1 -u sealteam --password=sckshuhari --default-character-set=utf8 -D toy
	sleep 20
	cd store-service && docker run --name store-service_1 --network=mini-shopping-cart_default --rm -v "${PWD}/store-service":/usr/src/myapp -w /usr/src/myapp toy-store-service:0.0.2 go test -tags=integration internal/...
	# cd store-service && go test -tags=integration internal/...
	docker-compose down | true

build_backend:
	docker-compose build store-service store-web store-nginx
	docker network create mini-shopping-cart_default | true
	docker-compose up -d store-database bank-gateway shipping-gateway
	sleep 20
	cat tearup/init.sql | docker exec -i store-database mysql --host=127.0.0.1 -u sealteam --password=sckshuhari --default-character-set=utf8 -D toy
	sleep 20
	

start_service:
	docker-compose up -d
	sleep 20

status_service:
	docker-compose ps

stop_service:
	docker-compose down

seed:
	cat tearup/init.sql | docker exec -i store-database /usr/bin/mysql -u sealteam --password=sckshuhari --default-character-set=utf8  toy

run_integratetest_backend_by_newman:
	make seed && newman run atdd/api/ซื้อสินค้าได้สำเร็จ_v2.json -d atdd/api/data/test-data.json -e atdd/api/environment/local.json

run_integratetest_backend_by_newman_with_reports:
	make seed && newman run atdd/api/ซื้อสินค้าได้สำเร็จ_v2.json -d atdd/api/data/test-data.json -e atdd/api/environment/local.json -r htmlextra --reporter-htmlextra-export atdd/api/reports/buy_order_sucess.html

run_integratetest_backend_by_robot:
	make seed && robot atdd/api-robot/shopping-cart-sucess.robot
	
run_integratetest_backend_by_robot_change_url:
	make seed && robot -v url:http://127.0.0.1:8000 atdd/api-robot/shopping-cart-sucess.robot
	
run_integratetest_backend_by_robot_select_env_file:
	make seed && robot -V atdd/api-robot/environment/local.yml atdd/api-robot/shopping-cart-sucess.robot
	
run_test_fake:
	robot atdd/api-robot/test-faker.robot
	
