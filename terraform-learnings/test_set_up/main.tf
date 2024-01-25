provider "aws"{
    region="us-east-1"
//  install aws cli, run aws configure and no need to following    
//  access_key = "XXXXXXXXXXXXX"
//  secret_key = "XXXXXXXXXXXXXXXXXXXXXXXXXX"
}

resource "aws_vpc" "vpcbytf"{
    cidr_block = "10.1.0.0/16"
    tags = {
      Terraform = "true"
      Name = "VPC By TF"
    }
}
