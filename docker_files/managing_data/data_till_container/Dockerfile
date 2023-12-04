# base image, this will provide a node js environment for out application to run
FROM node:18

# on to OS of above base image, we saying /app should be our working directory
# its like cd /app
WORKDIR /app

# copy package.json file from local machine in /app directory
COPY package.json .

# run npm install to install libraries from package.json
RUN npm install

# copy entire things from local machine to /app directory
COPY . .

# expose 3000 port of container, to map the port of our application
EXPOSE 3000

# command to run on container
CMD [ "node", "server.js" ]


# docker build -t cbagade/cl-data-vol:v1 .
# docker run -d  -p 3000:3000 --name manage-data --rm cbagade/cl-data-vol:v1 (--rm flag will remove container when its not running)
# docker logs manage-data -f
# GET http://localhost:3000/api/v1/fruits 
# POST  http://localhost:3000/api/v1/fruits 
# GET http://localhost:3000/api/v1/fruits 
# docker stop manage-data
# docker run -p 3000:3000 -d --name manage-data --rm cbagade/cl-data-vol:v1
# GET http://localhost:3000/api/v1/fruits  -> changes are gone
# data was available till container was running