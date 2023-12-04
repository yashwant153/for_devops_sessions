#base image, this image exists on docker hub
FROM node

WORKDIR /app
COPY package.json /app
RUN npm install

COPY . /app
EXPOSE 3000

# for named volume we don't need this
# this will be done with command
# VOLUME [ "/app/userchanges" ]

CMD ["node","server.js"]

# docker volume prune
# docker build -t cbagade/cl-data-vol:v3 .
# docker push cbagade/cl-data-vol:v3
# docker run -p 3000:3000 -d --name named-vol -v namedvol:/app/userchanges --rm cbagade/cl-data-vol:v3
# docker ps -a
# observe a volume created
# docker volume ls
# docker exec -it named-vol /bin/bash
# cd userchanges
# make some changes to file on your computer (touch chandra.txt)
# docker stop named-vol
# docker run -p 3000:3000 -d --name named-vol -v namedvol:/app/userchanges --rm cbagade/cl-data-vol:v3
# docker exec -it named-vol /bin/bash
# check the changes and this time changes are retained
# named volumes survives container restarts
# POST http://localhost:3000/api/v1/fruits
# this action will create a file inside container
# Also hit on GET http://localhost:3000/userchanges/fruits.json
# docker stop named-vol
# docker run -p 3000:3000 -d --name named-vol -v namedvol:/app/userchanges --rm cbagade/cl-data-vol:v3
# Hit on GET http://localhost:3000/userchanges/fruits.json
# changes are retained
