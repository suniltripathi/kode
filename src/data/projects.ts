export interface Project {
  id: string;
  title: string;
  category: "Full Stack" | "Microservices" | "Cloud & DevOps" | "Distributed Systems";
  tagline: string;
  description: string;
  imagePlaceholder: string;
  techStack: string[];
  metrics: string[];
  keyFeatures: string[];
  githubUrl: string;
  demoUrl: string;
  isStudentCapstone: boolean;
}

export const projects: Project[] = [
  {
    id: "fintech-microservices",
    title: "ApexPay: Distributed FinTech Banking & Ledger Platform",
    category: "Microservices",
    tagline: "Event-driven banking core with Saga orchestration, double-entry ledger, and Redis lock idempotency.",
    description: "Built as the flagship capstone in the Java Microservices track. Implements real-time money transfers, multi-currency accounts, automated reconciliation, and strict ACID guarantees across distributed microservices.",
    imagePlaceholder: "linear-gradient(135deg, #1e1e38 0%, #0d1117 100%)",
    techStack: ["Java 21", "Spring Boot 3", "Apache Kafka", "PostgreSQL", "Redis", "Docker", "AWS ECS"],
    metrics: [
      "12,000 TPS under load testing",
      "Sub-20ms P99 latency",
      "Zero double-spend via distributed locks"
    ],
    keyFeatures: [
      "Orchestration-based Saga pattern for money transfers",
      "Double-entry bookkeeping ledger guaranteeing mathematical balance",
      "Kafka event sourcing for complete audit history",
      "Spring Security 6 with OAuth2 resource server and JWT authorization",
      "Prometheus & Grafana dashboard for live transaction rate monitoring"
    ],
    githubUrl: "https://github.com/alexmorgan-tech/apexpay-microservices-core",
    demoUrl: "https://apexpay-demo.example.com",
    isStudentCapstone: true
  },
  {
    id: "cloud-gitops-platform",
    title: "KubeFlow: Multi-Region Kubernetes GitOps Platform",
    category: "Cloud & DevOps",
    tagline: "Fully automated infrastructure provisioning with Terraform, ArgoCD GitOps, and complete observability.",
    description: "An enterprise-grade platform engineering setup. Demonstrates how modern tech teams manage Kubernetes clusters, ingress controllers, certificate automation, and zero-downtime canary rollouts across AWS regions.",
    imagePlaceholder: "linear-gradient(135deg, #14283b 0%, #0c1524 100%)",
    techStack: ["Terraform", "Kubernetes", "AWS EKS", "ArgoCD", "Helm", "GitHub Actions", "Prometheus"],
    metrics: [
      "100% Declarative Infrastructure",
      "Zero-downtime rolling updates",
      "< 3 minute commit-to-production pipeline"
    ],
    keyFeatures: [
      "Terraform modules for multi-AZ VPC, EKS cluster, and IAM roles",
      "ArgoCD declarative sync with auto-healing and rollback",
      "Cert-Manager with Let's Encrypt automated SSL renewals",
      "Centralized logging with Promtail and Loki",
      "Trivy vulnerability scanning inside GitHub Actions pull requests"
    ],
    githubUrl: "https://github.com/alexmorgan-tech/kubeflow-gitops-infra",
    demoUrl: "https://kubeflow.example.com",
    isStudentCapstone: true
  },
  {
    id: "collab-code-room",
    title: "SyncCode: Real-Time Collaborative Web IDE & Canvas",
    category: "Full Stack",
    tagline: "Real-time collaborative code editor with conflict-free replicated data types (CRDT) and audio rooms.",
    description: "Designed during the Full Stack React & Node track. Features interactive syntax-highlighted code editing, execution sandbox, multi-cursor presence, and live WebRTC audio calling for remote pair programming.",
    imagePlaceholder: "linear-gradient(135deg, #2a1638 0%, #150d1e 100%)",
    techStack: ["React 19", "TypeScript", "Node.js", "WebSockets", "Redis Streams", "Docker Sandbox"],
    metrics: [
      "Sub-15ms typing sync latency",
      "Handles 50+ concurrent typers per room",
      "Isolated containerized code execution in 4 languages"
    ],
    keyFeatures: [
      "Operational transformation and CRDTs for dispute-free text synchronization",
      "Real-time remote cursor tracking with user colors and nametags",
      "Secure isolated Docker execution runner for Java, Python, JavaScript, and Go",
      "WebRTC peer mesh for low-latency voice communication",
      "One-click sharing links with fine-grained read/write permissions"
    ],
    githubUrl: "https://github.com/alexmorgan-tech/synccode-collaborative-ide",
    demoUrl: "https://synccode.example.com",
    isStudentCapstone: true
  },
  {
    id: "distributed-task-scheduler",
    title: "Chronos: Distributed Resilient Job & Workflow Engine",
    category: "Distributed Systems",
    tagline: "Scalable distributed cron and delayed task processing engine with Raft leader election.",
    description: "Built for high-scale backend demands. Supports recurring cron jobs, delayed one-shot notifications, automatic failover when worker nodes die, and strict at-least-once execution guarantees.",
    imagePlaceholder: "linear-gradient(135deg, #132d2c 0%, #0a1918 100%)",
    techStack: ["Java 21", "Redis Streams", "PostgreSQL", "Raft Consensus", "Docker", "Micrometer"],
    metrics: [
      "Handles 100,000 scheduled tasks per minute",
      "99.99% task execution reliability",
      "Sub-second worker failover recovery"
    ],
    keyFeatures: [
      "Dynamic worker heartbeats with auto-reassignment of stalled jobs",
      "Hierarchical timing wheels for ultra-fast task delay scheduling",
      "Exponential backoff retry with Dead Letter Queue (DLQ) inspection",
      "Web-based admin console to inspect, pause, and trigger task queues",
      "Prometheus metrics for worker utilization and task latency"
    ],
    githubUrl: "https://github.com/alexmorgan-tech/chronos-distributed-scheduler",
    demoUrl: "https://chronos-engine.example.com",
    isStudentCapstone: false
  }
];
