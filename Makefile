docker-deployment:
	cp ${ENV_FILE_PATH} .env.production
	docker-compose build
	docker-compose down
	docker-compose up -d
