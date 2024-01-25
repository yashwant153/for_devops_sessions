provider "aws"{
    region="us-east-1"
}

// this will create zip file
data "archive_file" "lambda_zip" {
    type          = "zip"
    source_file   = "index.mjs"
    output_path   = "lambda-function.zip"
}

// role required lambda
resource "aws_iam_role" "iam-for-lambda-tf" {
  name = "iam_for_lambda_tf"
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
    "Action": "sts:AssumeRole",      
    "Effect": "Allow",
    "Principal": {
              "Service": "lambda.amazonaws.com"
    },    
    "Sid": ""
    }
  ]
}
EOF
}

// creating lambda
resource "aws_lambda_function" "hello-lambda" {
  filename         = "lambda-function.zip"
  function_name    = "hello-lambda"
  role             = aws_iam_role.iam-for-lambda-tf.arn
  handler          = "index.handler"
  source_code_hash = data.archive_file.lambda_zip.output_base64sha256
  runtime          = "nodejs18.x"
}
