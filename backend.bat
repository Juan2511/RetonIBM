docker build -t jlre2511/nodejs-image-reto .
docker images
docker run --name nodejs-image-reto -p 80:8080 -d jlre2511/nodejs-image-reto
docker ps