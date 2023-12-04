FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]

# docker build -t cbagade/cl-networking:v1 .
# docker run -p 3000:3000 -d --name network-app --rm cbagade/cl-networking:v1
# on postman
# http://localhost:3000/movies
# http://localhost:3000/people
# shows OOB container to outside world communication works