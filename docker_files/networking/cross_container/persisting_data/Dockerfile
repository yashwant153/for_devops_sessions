FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["node", "app.js"]



# docker stop network-app
# docker stop mongodb
# docker rm mongodb
# run mongo db with named volume
# docker network create demo-net
# docker run -d --name mongodb -v data:/data/db --rm --network demo-net mongo
# docker build -t cbagade/cl-networking:v4 .
# docker run -p 3000:3000 -d --name network-app --network demo-net --rm cbagade/cl-networking:v4


# hit again GET and POST /favorites requests as shown ()
# GET - http://localhost:3000/fruits
# ensure JSON in Postman body
# POST - http://localhost:3000/fruits
# {
#    "fruitName":"Banana",
#    "price": 89,
#    "oraganic": true
# }
# GET - http://localhost:3000/fruits
# docker stop mongodb
# docker rm mongodb
# docker run -d --name mongodb -v data:/data/db --rm --network demo-net mongo
# now GET request will show previous data, hence proved , data is persisted