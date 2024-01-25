variable "vpc_cidr" {
  type        = string
  description = "The IP range to use for the VPC"
  default     = "10.0.0.0/16"
}

variable "public_subnet_cidr" {
  type        = string
  description = "The IP range to use for the public subnet"
  default     = "10.0.1.0/24"
}

variable "private_subnet_cidr" {
  type        = string
  description = "The IP range to use for the private subnet"
  default     = "10.0.2.0/24"
}

variable "env" {
  type = string
  description = "Env for installation"
}