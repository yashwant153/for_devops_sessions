FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["node", "app.js"]


# docker stop network-app
# docker stop mongodb
# docker rm mongodb
# docker network create demo-net
# docker network ls
# docker run -d --name mongodb --network demo-net mongo
# app.js will have now name of mongo container instead of IP Address
# docker build -t cbagade/cl-networking:v3 .
# docker run -p 3000:3000 -d --name network-app --network demo-net --rm cbagade/cl-networking:v3

# GET - http://localhost:3000/fruits
# POST - http://localhost:3000/fruits
# {
#    "fruitName":"Banana",
#    "price": 89,
#    "oraganic": true
# }
# GET - http://localhost:3000/fruits