// create bucket first
// aws s3 mb s3://bucket-stroing-tfstate
// aws s3 ls s3://bucket-stroing-tfstate --recursive
// after terraform destroy
// aws s3 rb s3://bucket-stroing-tfstate --force

provider "aws"{
    region="us-east-1"
}

resource "aws_vpc" "vpc-by-tf"{
    cidr_block = "10.0.0.0/16"
    tags = {
      Terraform = "true"
      Name = "vpc-by-tf"
    }
}
