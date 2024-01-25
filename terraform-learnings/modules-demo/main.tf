provider "aws"{
    region="us-east-1"
}


// module internet-gateway
module "internetgateway" {
  source = "./internet-gateway-module"
  env = var.env
}

 resource "aws_instance" "ec2-by-tf" {
  ami = "ami-0a3c3a20c09d6f377"
  instance_type = "t2.micro"
  subnet_id = module.internetgateway.vpc-public_subnet_id //from output.tf of internetgateway modules
  vpc_security_group_ids = [module.internetgateway.vpc-security_group_id] //from output.tf of internetgateway modules
  user_data = file("bootstrapscript/ec2-bootstrap.sh")

  

  tags = {
     Terraform = "true"
     Name = "EC2 Instance by TF"
  }

}

output "public_ip_address" {
  value = aws_instance.ec2-by-tf.public_ip
}

output "private_ip_address" {
  value = aws_instance.ec2-by-tf.private_ip
} 

output "env" {
  value = module.internetgateway.env
}
