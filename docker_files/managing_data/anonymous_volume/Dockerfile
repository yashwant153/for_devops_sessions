#base image, this image exists on docker hub
FROM node

WORKDIR /app
COPY package.json /app
RUN npm install

COPY . /app
EXPOSE 3000

# userchanges will be available inside container , since copied to container
# that directory will be mounted as volume
# but where that is available on host, is not something we can control
# we should be able to get that location with a command, though
# only local directory is copied to container along with files inside
# but mounting has nothing to do with local directory
VOLUME [ "/app/userchanges" ]

CMD ["node","server.js"]

# docker build -t cbagade/cl-data-vol:v2 .
# docker push cbagade/cl-data-vol:v2
# docker run -d -p 3000:3000  --name anonymous-vol --rm cbagade/cl-data-vol:v2
# docker ps -a
# observe a volume created
# docker volume ls (docker volume prune and docker system prune)
# this volume will be mounted by docker system and that path can be find out by -
# docker inspect --type container -f '{{range $i, $v := .Mounts }}{{printf "%v\n" $v}}{{end}}' anonymous-vol
# sudo ls to path obtained by docker inspect command
# this will be path on host
# docker logs anonymous-vol -f
# 
# POST http://localhost:3000/api/v1/fruits
# this action will create a file inside container
# Also hit on GET http://localhost:3000/userchanges/fruits.json
# go to the path obtained by docker inspect command (this will be on host)
# the file which was created on host and created inside container can be seen
# docker exec -it anonymous-vol /bin/bash
# cd userchanges
# touch new_file.json
# observe those changes on host system , on path , obtained via inspect command

# docker stop anonymous-vol
# docker run -p 3000:3000 -d --name anonymous-vol --rm cbagade/cl-data-vol:v2
# docker inspect --type container -f '{{range $i, $v := .Mounts }}{{printf "%v\n" $v}}{{end}}' anonymous-vol
# check the file and now changes are gone (also volume has gone)
