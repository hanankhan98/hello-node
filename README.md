End-to-End DevOps Pipeline with Monitoring

Read the Each Project Readme.md to Setup the Full DevOps Pipeline With Monitoring

Follow each part repo for detailed setup, then use this repo for the full integrated workflow.

# Project Architecture

![DevOps Monitoring Pipeline](devops_monitoring_pipeline.png)


🚀 Fully Automated Deployment & Monitoring of a Dockerized Node.js Application on AWS

This project demonstrates how to build a complete DevOps pipeline to deploy and monitor a Node.js application on AWS with automation, containerization, CI/CD, Infrastructure as Code (IaC), configuration management, and observability.

# 📌 Project Overview

Code → Build → Deploy → Monitor → Visualize

Entire pipeline automated from a single commit.

Production-ready DevOps workflow with integrated monitoring.

# 📂 Project Breakdown

This repo is organized into different parts so you can learn and build step by step:

Terraform → Provisions AWS infrastructure (VPC, Security Groups, EC2).

Ansible → Configures EC2 (Docker, Node Exporter, dependencies).

Docker → Containerizes Node.js application.

GitHub Actions → CI/CD pipeline for automated builds & deployments.

Prometheus + Node Exporter → Collects application & system metrics.

Grafana → Visualizes metrics in real-time dashboards.

# ⚙️ Setup & Configuration

1️⃣ Clone the repository

```bash
git clone https://github.com/hanankhan98/hello-node.git
cd hello-node
````

2️⃣ Break into parts & configure

Terraform → Set AWS access keys in terraform.tfvars.

Ansible → Update inventory with EC2 instance details.

Docker → Customize Dockerfile if needed.

Prometheus → Edit prometheus.yml to add your targets (local & remote exporters).

3️⃣ Set secrets in GitHub

Go to Repo → Settings → Secrets → Actions and add:

AWS_ACCESS_KEY_ID

AWS_SECRET_ACCESS_KEY

DOCKER_HUB_USERNAME

DOCKER_HUB_TOKEN

EC2_SSH_KEY

4️⃣ Push to GitHub & Automate

```bash
git add .
git commit -m "Automated pipeline with monitoring"
git push origin main
`````
This triggers the GitHub Actions workflow → builds Docker image → pushes to Docker Hub → provisions infra → configures server → deploys container → sets up monitoring.

# 🔄 CI/CD Pipeline Flow

Push code to GitHub → CI/CD pipeline starts.

GitHub Actions builds Docker image & pushes to Docker Hub.

Terraform provisions AWS infrastructure.

Ansible configures the EC2 instance.

Application container runs on EC2.

Prometheus scrapes metrics from Node Exporter & app.

Grafana visualizes metrics in dashboards.

# 🖼️ Infrastructure Diagram

# 🛠️ Technologies Used

Programming/Frameworks: Node.js, Express.js

CI/CD: GitHub Actions

Containerization: Docker, Docker Hub

Infrastructure as Code (IaC): Terraform

Configuration Management: Ansible

Cloud: AWS (EC2, Security Groups, VPC)

Monitoring & Visualization: Prometheus, Grafana, Node Exporter

Security: IAM roles, secrets management, firewall rules

# ✨ Impact

⏱️ Reduced manual setup from hours to minutes.

📊 Real-time observability with Prometheus & Grafana.

🔄 Fully automated commit → deploy → monitor pipeline.

