# Kubernetes Manifests for Jenkins Deployment

docker build . -t cbagade/jenkins:v1

docker push cbagade/jenkins:v1

mkdir jenkins_mnt

sudo chown -R 1000:1000 jenkins_mnt/

sudo chmod 666 /var/run/docker.sock

docker container run -d -p 8081:8080  -p 50000:50000 -v /home/chandra/jenkins_mnt:/var/jenkins_home  -v /var/run/docker.sock:/var/run/docker.sock --name jenkins-local  cbagade/jenkins:v1


access jenkins on localhost:8081
this can be made public by ngrok , which is useful in adding github webhooks


in case Jenkins need to be reset, delete jenkins_mnt directory
