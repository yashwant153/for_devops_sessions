provider "aws"{
    region="us-east-1"
}

resource "aws_instance" "first-ec2-by-tf" {
  // ami can be copied from aws console
  ami = "ami-0a3c3a20c09d6f377"
  instance_type = "t2.micro"

}


resource "aws_instance" "second-ec2-by-tf" {
  ami = "ami-0a3c3a20c09d6f377"
  instance_type = "t2.micro"

  // before this instance, first one will be created
  depends_on = [ aws_instance.first-ec2-by-tf ]
}

// following will be the output of terraform apply --auto-approve
output "public_ip_address" {
  value = aws_instance.first-ec2-by-tf.public_ip
}

output "private_ip_address" {
  value = aws_instance.first-ec2-by-tf.private_ip
}
