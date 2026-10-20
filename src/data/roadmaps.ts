export interface RoadmapStage {
  stageNumber: number;
  title: string;
  duration: string;
  goal: string;
  skills: string[];
  recommendedProjects: string[];
  checklist: string[];
}

export interface CareerRoadmap {
  id: string;
  title: string;
  targetRole: string;
  duration: string;
  difficulty: "Beginner to Advanced" | "Intermediate to Senior" | "Advanced / Architect";
  description: string;
  stages: RoadmapStage[];
}

export const roadmaps: CareerRoadmap[] = [
  {
    id: "java-cloud-architect",
    title: "Full Stack Java & Cloud Architect Roadmap",
    targetRole: "Senior Java Backend Engineer / Cloud Architect",
    duration: "6 - 9 Months",
    difficulty: "Intermediate to Senior",
    description: "The complete journey from solid Java fundamentals to designing and operating resilient, cloud-native distributed microservices on AWS.",
    stages: [
      {
        stageNumber: 1,
        title: "Java Deep Dive & Core Fundamentals",
        duration: "Weeks 1 - 4",
        goal: "Master Java OOP, memory model, multithreading, and modern functional features.",
        skills: ["Java 21 Syntax", "OOP & Design Patterns", "Collections & Generics", "Concurrency & Locks", "Streams & Lambdas"],
        recommendedProjects: ["Multi-threaded file indexer", "Custom memory LRU cache"],
        checklist: [
          "Understand JVM Heap, Stack, and Metaspace memory areas",
          "Differentiate Synchronized, ReentrantLock, and Atomic classes",
          "Master Java 21 Virtual Threads and thread-per-task model",
          "Write clean unit tests using JUnit 5 and Mockito"
        ]
      },
      {
        stageNumber: 2,
        title: "Spring Boot 3 & Enterprise Data Tier",
        duration: "Weeks 5 - 8",
        goal: "Build robust REST APIs with Spring Boot 3, Spring Data JPA, and secure them with JWT/OAuth2.",
        skills: ["Spring Boot 3", "Spring Data JPA", "Hibernate N+1 Fixes", "Spring Security 6", "PostgreSQL", "Flyway"],
        recommendedProjects: ["Role-Based Access Control User Management Service", "E-Commerce Catalog & Inventory API"],
        checklist: [
          "Configure Spring IoC container and understand Bean scopes",
          "Implement validation with Jakarta validation and custom annotations",
          "Configure stateless JWT authentication with Spring Security filter chains",
          "Optimize database queries using compound indexes and fetch joins"
        ]
      },
      {
        stageNumber: 3,
        title: "Microservices & Distributed Systems",
        duration: "Weeks 9 - 14",
        goal: "Decompose monoliths, implement API gateways, service discovery, and resilient event communication.",
        skills: ["Spring Cloud Gateway", "Eureka Discovery", "Resilience4j", "Apache Kafka", "Redis Caching", "Saga Pattern"],
        recommendedProjects: ["Distributed Food Delivery Order & Payment Engine with Kafka"],
        checklist: [
          "Implement Circuit Breaker, Rate Limiter, and Bulkheads",
          "Set up Apache Kafka topics, partitioned event publishing, and consumer offset commits",
          "Implement distributed tracing with OpenTelemetry/Micrometer",
          "Handle eventual consistency and compensation transactions"
        ]
      },
      {
        stageNumber: 4,
        title: "Containers, Kubernetes & AWS Deployment",
        duration: "Weeks 15 - 20",
        goal: "Package applications into minimal Docker images and run them in Kubernetes on AWS.",
        skills: ["Docker Multi-stage", "Kubernetes (Deployments, Services, Ingress)", "AWS EKS", "Terraform", "GitHub Actions CI/CD"],
        recommendedProjects: ["Production-ready GitOps pipeline deploying microservices to AWS EKS"],
        checklist: [
          "Write secure non-root Dockerfiles with multi-stage builds",
          "Deploy K8s manifests with HPA auto-scaling and health probes",
          "Automate deployment with GitHub Actions pipeline and Slack alerts",
          "Set up Prometheus alerts and Grafana dashboards for latency & error rates"
        ]
      }
    ]
  },
  {
    id: "fullstack-web-architect",
    title: "Modern Full Stack Engineer (React + TypeScript + Node.js)",
    targetRole: "Full Stack Engineer / Senior Frontend Architect",
    duration: "5 - 7 Months",
    difficulty: "Beginner to Advanced",
    description: "Master modern web engineering: from type-safe frontend UIs with React 19 to scalable Node.js microservices and SQL databases.",
    stages: [
      {
        stageNumber: 1,
        title: "TypeScript & Modern React 19 Mastery",
        duration: "Weeks 1 - 5",
        goal: "Build type-safe, interactive single-page and server-rendered web applications.",
        skills: ["TypeScript Strict Mode", "React 19 Hooks", "Server Components", "State Management (Zustand)", "Tailwind / Modern CSS"],
        recommendedProjects: ["Interactive Data Visualization Dashboard", "Real-Time Kanban Project Board"],
        checklist: [
          "Master Generics, Union types, and Type narrowing in TypeScript",
          "Understand React 19 useActionState, useOptimistic, and Server Actions",
          "Implement clean component design systems with accessibility (a11y)",
          "Optimize client performance, memoization, and lazy code splitting"
        ]
      },
      {
        stageNumber: 2,
        title: "Node.js, Express & Database Architecture",
        duration: "Weeks 6 - 10",
        goal: "Develop scalable backends, design normalized databases, and implement real-time communication.",
        skills: ["Node.js Event Loop", "Express / Fastify", "PostgreSQL & Prisma", "WebSockets / Socket.io", "Redis"],
        recommendedProjects: ["Multi-user Chat & Audio Collaboration Platform with WebSockets"],
        checklist: [
          "Design normalized relational schemas with indexes and foreign keys",
          "Implement rate limiting, helmet security headers, and CORS policies",
          "Build real-time bidirectional communication channels with Socket.io",
          "Cache expensive queries and rate limit with Redis"
        ]
      },
      {
        stageNumber: 3,
        title: "Full Stack Next.js & Cloud Production",
        duration: "Weeks 11 - 16",
        goal: "Deploy production applications with Next.js App Router, Edge runtime, and cloud databases.",
        skills: ["Next.js 15 App Router", "Server Actions", "Vercel / AWS ECS", "Stripe Checkout", "End-to-End Testing (Playwright)"],
        recommendedProjects: ["SaaS Subscription Platform with Stripe, Auth, and Team Workspaces"],
        checklist: [
          "Implement server-side authentication with cookies and secure session tokens",
          "Handle webhook events securely with cryptographic signature verification",
          "Write comprehensive E2E tests covering critical user purchasing journeys",
          "Set up continuous deployment with preview environments"
        ]
      }
    ]
  },
  {
    id: "devops-platform-engineer",
    title: "DevOps & Cloud Platform Engineer Roadmap",
    targetRole: "DevOps Engineer / Platform Engineer / SRE",
    duration: "4 - 6 Months",
    difficulty: "Intermediate to Senior",
    description: "Master infrastructure automation, cloud platforms, container orchestration, GitOps, and platform observability.",
    stages: [
      {
        stageNumber: 1,
        title: "Linux, Networking & Shell Automation",
        duration: "Weeks 1 - 3",
        goal: "Gain complete mastery over the Linux terminal, system calls, networking protocols, and Bash scripting.",
        skills: ["Linux Admin", "Bash Scripting", "TCP/IP, DNS, SSL/TLS", "SSH Key Management", "Git Workflows"],
        recommendedProjects: ["Automated system health auditor and backup script with log rotation"],
        checklist: [
          "Inspect process trees, memory utilization, and network sockets (ss, lsof, top)",
          "Configure systemd service units with automatic restart policies",
          "Set up SSH bastion hosts and key-based authentication",
          "Write idempotent bash automation scripts"
        ]
      },
      {
        stageNumber: 2,
        title: "Docker, Kubernetes & Container Orchestration",
        duration: "Weeks 4 - 8",
        goal: "Run, scale, and troubleshoot containerized workloads in Kubernetes clusters.",
        skills: ["Docker Engine", "Kubernetes (CKA Topics)", "Helm Charts", "Ingress Controllers", "NetworkPolicies"],
        recommendedProjects: ["Production-grade Helm chart packaging a multi-tier microservice app"],
        checklist: [
          "Build minimal Distroless and Alpine container images",
          "Configure K8s ResourceQuotas, Limits, and HorizontalPodAutoscaler (HPA)",
          "Implement zero-downtime rolling updates with readiness and liveness probes",
          "Enforce cluster security using Pod Security Standards and NetworkPolicies"
        ]
      },
      {
        stageNumber: 3,
        title: "Infrastructure as Code & GitOps on AWS",
        duration: "Weeks 9 - 14",
        goal: "Provision reproducible cloud environments with Terraform and automate CD with ArgoCD.",
        skills: ["Terraform", "AWS (VPC, EKS, RDS, S3, IAM)", "GitHub Actions", "ArgoCD", "Prometheus & Grafana"],
        recommendedProjects: ["Automated Multi-Environment GitOps setup with automated Canary Rollouts"],
        checklist: [
          "Structure modular Terraform code with remote state locking in S3 & DynamoDB",
          "Set up ArgoCD for declarative continuous delivery and automated sync",
          "Implement GitHub Actions workflows with secrets scanning and linting",
          "Build Grafana dashboards tracking RED and USE golden signals"
        ]
      }
    ]
  }
];
