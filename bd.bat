docker run --name postgres-docker -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
docker exec -it postgres-docker bash
docker build -t my-postgres-image .
docker run -d --name my-postgres-container -p 5555:5432 my-postgres-image
docker stop my-postgres-container
docker container start my-postgres-container