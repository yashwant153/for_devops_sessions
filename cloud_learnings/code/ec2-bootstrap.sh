#!/bin/bash
# script to install apache web server
yum update -y
yum install -y httpd
systemctl start httpd
systemctl enable httpd
# the message will be displayed once server is launched
echo "<h1>Hello DevOps guys from $(hostname -f)</h1>" > /var/www/html/index.html