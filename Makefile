

# DOCKER TASKS
# Build the container
build: ## Build the containers
	docker build users/. -t halahkr/users_average
	docker build buildings/. -t halahkr/buildings_average
	docker build average_age/. -t halahkr/average_age

run: ## run the containers
	docker run -d -p 9005:9005 halahkr/users_average 
	docker run -d -p 8005:8005 halahkr/buildings_average 
	docker run -d -p 8080:8080 halahkr/average_age 


up: build run


