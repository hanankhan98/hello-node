resource "aws_key_pair" "mykey" {
  key_name   = "my-aws-key"
  public_key = file("/home/hanankhan/.ssh/id_rsa.pub")
}
