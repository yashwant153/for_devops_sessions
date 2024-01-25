// create bucket first
// aws s3 mb s3://bucket-stroing-tfstate
// aws s3 ls s3://bucket-stroing-tfstate --recursive
// after terraform destroy
// aws s3 rb s3://bucket-stroing-tfstate --force

terraform {
    backend "s3" {
        key = "terraform/terraform.tfstate"
        bucket = "bucket-stroing-tfstate"
        region="us-east-1"
    }
}
