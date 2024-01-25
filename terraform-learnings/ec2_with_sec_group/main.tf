provider "aws"{
    region="us-east-1"
}

// create a VPC
resource "aws_vpc" "vpc-by-tf"{
    cidr_block = "10.0.0.0/16"
    tags = {
      Terraform = "true"
      Name = "VPC By TF"
    }
}

// get list of availability zones
data "aws_availability_zones" "available" {
  state = "available"
}

// create public subnet
resource "aws_subnet" "public-subnet-by-tf" {
  vpc_id            = aws_vpc.vpc-by-tf.id // id of VPC we created earlier
  cidr_block        = "10.0.1.0/24"
  availability_zone = data.aws_availability_zones.available.names[0] // first az
  map_public_ip_on_launch = true
  
  tags = {
    Name = "Public Subnet By TF"
  }
}

// create provate subnet
resource "aws_subnet" "private-subnet-by-tf" {
  vpc_id            = aws_vpc.vpc-by-tf.id // id of VPC we created earlier
  cidr_block        = "10.0.2.0/24"
  availability_zone = data.aws_availability_zones.available.names[0]  // first az

  tags = {
    Name = "Private Subnet By TF"
  }
}


// aws security group
// allowing http and ssh traffic
resource "aws_security_group" "http_ssh_traffic" {
  
  name = "Http and SSH"
  vpc_id = aws_vpc.vpc-by-tf.id

  ingress {
    from_port = 80
    to_port = 80
    protocol = "TCP"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port = 22
    to_port = 22
    protocol = "TCP"
    cidr_blocks = ["0.0.0.0/0"]
  }  

   egress {
    from_port       = 0
    to_port         = 0
    protocol        = "-1"
    cidr_blocks     = ["0.0.0.0/0"]
  }

  tags = {
    Name = "Security Group By Terraform"
  }

}

// create ec2 instance
resource "aws_instance" "ec2-by-tf" {
  ami = "ami-0a3c3a20c09d6f377"
  instance_type = "t2.micro"
  subnet_id = aws_subnet.public-subnet-by-tf.id // public subnet id
  vpc_security_group_ids = [aws_security_group.http_ssh_traffic.id] // security group
  tags = {
      Terraform = "true"
      Name = "EC2 By TF"
    }  
}


// will output following after terraform apply
output "public_ip_address" {
  value = aws_instance.ec2-by-tf.public_ip
}

output "private_ip_address" {
  value = aws_instance.ec2-by-tf.private_ip
}

output "availability_zone" {
  value = aws_subnet.public-subnet-by-tf.availability_zone
}
