End-to-End DevOps Pipeline with Monitoring

Read the Each Project Readme.md to Setup the Full DevOps Pipeline With Monitoring

For Monitoring Setup here is the Repo : https://github.com/hanankhan98/Prometheus-and-Grafana

flowchart TD

    Dev[👨‍💻 Developer] -->|Push Code| GitHub[GitHub Repository]
    GitHub -->|Triggers Workflow| Actions[⚙️ GitHub Actions CI/CD]
    Actions -->|Builds Docker Image| Docker[🐳 Docker Hub]
    Docker -->|Pull Image| EC2[AWS EC2 Instance]

    subgraph Infra[Infrastructure]
        Terraform[Terraform: Provision VPC + EC2] --> EC2
        Ansible[Ansible: Configure Server] --> EC2
    end

    EC2 -->|Runs| NodeApp[🚀 Node.js Container]

    NodeApp -->|Expose Metrics| Prometheus[📊 Prometheus]
    EC2 -->|System Metrics| Prometheus
    Prometheus --> Grafana[📈 Grafana Dashboards]

    style Dev fill:#2E8B57,stroke:#333,stroke-width:2px,color:#fff
    style GitHub fill:#24292e,stroke:#333,stroke-width:2px,color:#fff
    style Actions fill:#2088FF,stroke:#333,stroke-width:2px,color:#fff
    style Docker fill:#2496ED,stroke:#333,stroke-width:2px,color:#fff
    style Terraform fill:#5C4EE5,stroke:#333,stroke-width:2px,color:#fff
    style Ansible fill:#EE0000,stroke:#333,stroke-width:2px,color:#fff
    style EC2 fill:#FF9900,stroke:#333,stroke-width:2px,color:#fff
    style NodeApp fill:#68A063,stroke:#333,stroke-width:2px,color:#fff
    style Prometheus fill:#E6522C,stroke:#333,stroke-width:2px,color:#fff
    style Grafana fill:#F46800,stroke:#333,stroke-width:2px,color:#fff
