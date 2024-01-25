variable "route_table_cidr" {
  type        = string
  description = "Route table cidr"
  default     = "0.0.0.0/0"
}

variable "route_table_ipv6_cidr" {
  type        = string
  description = "Route table IPV6 cidr"
  default     = "::/0"
}

variable "env" {
  type = string
  description = "Env for installation"
}