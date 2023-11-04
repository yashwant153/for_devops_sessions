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


# docker build -t cbagade/cl-first-prog:v3 .
# docker push cbagade/cl-first-prog:v3
# map port of host to that of container (host port is mapped to container, container port is mapped to application)
# docker run -d -p 3000:3000 --name node-demo cbagade/cl-first-prog:v3
# docker ps -a 
# docker logs <container_id> -f
# http://localhost:3000/api/v1/fruits (access application on host port which is mapped to container)
# docker stop node-demo
# docker rm node-demo