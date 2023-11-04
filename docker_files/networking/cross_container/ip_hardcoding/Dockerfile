FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["node", "app.js"]


# docker stop network-app
# prior that lets run mongo container
# docker run -d --name mongodb mongo
# see mongo container running
# docker ps -a
# docker inspect mongodb
# look for "NetworkSettings" -> "IPAddress"
# change app.js for IP
# docker build -t cbagade/cl-networking:v2 .
# docker run -p 3000:3000 -d --name network-app --rm cbagade/cl-networking:v2
# docker logs network-app -f
# ensure content type from postman is JSON
# GET - http://localhost:3000/fruits
# POST - http://localhost:3000/fruits
# {
#    "fruitName":"Banana",
#    "price": 89,
#    "oraganic": true
# }
# GET - http://localhost:3000/fruits