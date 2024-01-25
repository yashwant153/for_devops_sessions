// call VPC module
module "vpc" {
  source = "../vpc-module"
  env = var.env
}

// internet gateway
resource "aws_internet_gateway" "ig-by-tf" {
  vpc_id = module.vpc.vpc_id // output from vpc-module

  tags = {
    Name = "Interget Gateway by Terraform"
  }
}

//route table
// configuration with cidr and ipv6

resource "aws_route_table" "rt-by-tf" {
  vpc_id = module.vpc.vpc_id // output from vpc-module

  route {
    cidr_block = var.route_table_cidr
    gateway_id = aws_internet_gateway.ig-by-tf.id
  }

  route {
    ipv6_cidr_block = var.route_table_ipv6_cidr
    gateway_id      = aws_internet_gateway.ig-by-tf.id
  }

  tags = {
    Name = "Route table by TF"
  }
}

// associating public subnet to route table where ec2 instance will be residing
resource "aws_route_table_association" "route-table-assoc-by-tf" {
  subnet_id      = module.vpc.public_subnet_id // output from vpc-module
  route_table_id = aws_route_table.rt-by-tf.id
}
