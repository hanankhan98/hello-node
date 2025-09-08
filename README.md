Complete the Ansible And Terafrom Setup First and then make the workflow for automation.

# Node.js Service Deployment with Terraform, Ansible & GitHub Actions

[Node.js Service Deployment](https://roadmap.sh/projects/nodejs-service-deployment)

## 📌 Project Overview

This project demonstrates a **complete CI/CD pipeline** to deploy a Node.js service to a DigitalOcean Droplet.
It covers **Infrastructure as Code (IaC)** using Terraform, **Configuration Management** using Ansible, and **Automated Deployment** using GitHub Actions.

The goal is to:

1. Provision infrastructure with **Terraform**.
2. Configure the server with **Ansible**.
3. Deploy the Node.js service automatically using **GitHub Actions**.

---

## 🛠️ Technologies Used

* **Terraform** – Create and manage cloud infrastructure.
* **Ansible** – Install and configure packages on the server.
* **Node.js & npm** – Backend service runtime and package manager.
* **PM2** – Node.js process manager.
* **GitHub Actions** – Continuous deployment pipeline.
* **DigitalOcean** – Cloud hosting provider.

---

## 📂 Project Structure

```
.
├── terraform/                      # Terraform configuration to create Droplet
│   ├── main.tf
│   ├── variables.tf
│   ├── terraform.tfvars
│   └── outputs.tf
│
├── ansible-project/                 # Ansible project folder
│   ├── inventory.ini                # Server inventory
│   ├── node_service.yml             # Ansible playbook for Node.js deployment
│   └── roles/
│       └── app/
│           ├── tasks/main.yml       # Deployment tasks
│           └── files/node-service/  # Node.js app files
│
└── .github/workflows/deploy.yml     # GitHub Actions workflow for CI/CD
```

---

## ⚙️ Setup Instructions

### 1️⃣ Infrastructure Setup (Terraform)

1. Install Terraform.
2. Configure your `terraform.tfvars` file:

   ```hcl
   do_token   = "<YOUR_DIGITALOCEAN_TOKEN>"
   ssh_key_id = "<YOUR_DO_SSH_KEY_ID>"
   ```
3. Deploy:

   ```bash
   terraform init
   terraform apply
   ```

---

### 2️⃣ Server Configuration (Ansible)

1. Install Ansible:

   ```bash
   sudo apt install ansible
   ```
2. Update `inventory.ini` with your Droplet’s IP:

   ```ini
   [webservers]
   <YOUR_DROPLET_IP> ansible_user=root ansible_ssh_private_key_file=~/.ssh/id_rsa_user1
   ```
3. Run the Ansible playbook:

   ```bash
   ansible-playbook -i inventory.ini node_service.yml --ask-become-pass
   ```

---

### 3️⃣ Node.js Service

* The service is located in `roles/app/files/node-service/`.
* It contains a simple `app.js` that returns `"Hello, world!"` when accessed on `/`.

---

### 4️⃣ Automated Deployment (GitHub Actions)

1. Go to **GitHub → Settings → Secrets and variables → Actions**.
2. Add:

   * `SSH_PRIVATE_KEY` – Your private SSH key.
3. Push code to the `main` branch to trigger deployment:

```yaml
name: Deploy Node Service via Ansible

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Setup SSH
        uses: webfactory/ssh-agent@v0.7.0
        with:
          ssh-private-key: ${{ secrets.SSH_PRIVATE_KEY }}

      - name: Install Ansible
        run: sudo apt-get update && sudo apt-get install -y ansible

      - name: Run Ansible Playbook
        run: ansible-playbook -i inventory.ini node_service.yml --tags app
        env:
          ANSIBLE_HOST_KEY_CHECKING: "False"
```

---

## 🚀 Deployment

Once everything is set up:

* Push changes to `main`.
* GitHub Actions will:

  1. Connect to the server via SSH.
  2. Install dependencies.
  3. Deploy the updated Node.js service.
* Access the service at:

  ```
  http://<YOUR_DROPLET_IP>/
  ```

---

## 📌 Notes

* Ensure your Droplet’s firewall allows HTTP (port 3000 Coustme) traffic.
* PM2 is used to keep the app running and restart it on reboot.
* SSH key authentication is required; no password logins.

https://roadmap.sh/projects/nodejs-service-deployment

---


---

Do you want me to **also include a diagram** showing the Terraform → Ansible → GitHub Actions workflow so the README looks more professional on GitHub? That would make it stand out.
