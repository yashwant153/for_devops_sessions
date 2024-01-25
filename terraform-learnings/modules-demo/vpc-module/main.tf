resource "aws_vpc" "vpc-by-tf"{
    cidr_block = var.vpc_cidr
    tags = {
      Terraform = "true"
      Name = "VPC By TF"
      Environment = var.env
    }
}

data "aws_availability_zones" "available" {
  state = "available"
}

resource "aws_subnet" "public-subnet-by-tf" {
  vpc_id            = aws_vpc.vpc-by-tf.id
  cidr_block        = var.public_subnet_cidr
  availability_zone = data.aws_availability_zones.available.names[0]
  map_public_ip_on_launch = true
  
  tags = {
    Name = "Public Subnet by TF"
  }
}

resource "aws_subnet" "private-subnet-by-tf" {
  vpc_id            = aws_vpc.vpc-by-tf.id
  cidr_block        = var.private_subnet_cidr
  availability_zone = data.aws_availability_zones.available.names[0]

  tags = {
    Name = "Private Subnet by TF"
  }
}

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
    Name = "Security Group by TF"
  }

}
