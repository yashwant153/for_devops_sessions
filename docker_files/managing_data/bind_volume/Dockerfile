#base image, this image exists on docker hub
FROM node

WORKDIR /app
COPY package.json /app
RUN npm install

COPY . /app
EXPOSE 3000


CMD ["node","server.js"]

# docker volume prune
# docker volume rm namedvol
# docker run -p 3000:3000 -d --name bind-vol -v "/home/chandra/docker-kubernetes-learnings/managing_data/bind_volume/userchanges:/app/userchanges" --rm cbagade/cl-data-vol:v3
# now this volume with be mounted on /home/chandra/docker-kubernetes-learnings/managing_data/named_volume/userchanges
# any changes made to file inside container will be available at this path
# not for production