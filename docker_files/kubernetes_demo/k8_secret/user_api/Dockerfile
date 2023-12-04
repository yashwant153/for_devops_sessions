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

# expose 8080 port of container, to map the port of our application
EXPOSE 8080

# command to run on container
CMD [ "node", "user_app.js" ]

# docker build -t cbagade/kub-demo-users-3:latest .
# docker push cbagade/kub-demo-users-3:latest