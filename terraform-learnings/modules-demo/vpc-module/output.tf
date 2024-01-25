// these outputs, will be input to internet-gateway-module

output "vpc_id" {
  value = aws_vpc.vpc-by-tf.id
}

output "public_subnet_id"{
    value = aws_subnet.public-subnet-by-tf.id
}

output "security_group_id" {
  value = aws_security_group.http_ssh_traffic.id
}

output "env" {
  value = var.env
}