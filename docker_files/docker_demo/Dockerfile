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
COPY app.js .

# expose 3000 port of container, to map the port of our application
EXPOSE 3000

# command to run on container
CMD [ "node", "app.js" ]


# docker build -t cbagade/cl-first-prog:v1 .
# docker push cbagade/cl-first-prog:v1
# map port of host to that of container (host port is mapped to container, container port is mapped to application)
# docker run -p 3000:3000 cbagade/cl-first-prog:v1
# http://localhost:3000/ (access application on host port which is mapped to container)

# docker run -d -p 3000:3000 cbagade/cl-first-prog:v1 (in detached mode)
# http://localhost:3000/ (access application on host port which is mapped to container)

# docker run -p 3001:3000 cbagade/cl-first-prog:v1
# http://localhost:3001/ (access application on host port which is mapped to container)

# docker ps -a
# enter the container
# docker exec -it <container_id> /bin/bash (or docker exec -it <container_id> /bin/bash)
# ls /app
# docker stop <container_id>
# docker rm <container_id>
# image can be seen on docker hub

# make changes to app.js
# docker build -t cbagade/cl-first-prog:v2 .
# docker run -p 3000:3000 cbagade/cl-first-prog:v2
# http://localhost:3000/ (access application on host port which is mapped to container)