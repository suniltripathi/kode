export interface Course {
  id: string;
  slug: string;
  title: string;
  badge: string;
  targetAudience: string;
  duration: string;
  schedule: string;
  mode: "Live Interactive (Zoom/Meet)" | "Weekend Intensive" | "Corporate Cohort";
  nextBatchDate: string;
  seatsLeft: number;
  totalSeats: number;
  rating: number;
  reviewsCount: number;
  shortDesc: string;
  overview: string;
  highlights: string[];
  modules: { moduleTitle: string; topics: string[] }[];
  technologiesCovered: string[];
  prerequisites: string[];
  careerOutcomes: string[];
}

export const courses: Course[] = [
  {
    id: "fs-java-microservices",
    slug: "java-spring-boot-microservices-mastery",
    title: "Enterprise Java & Spring Boot Microservices Mastery",
    badge: "Flagship Bootcamp",
    targetAudience: "Software Engineers, Backend Developers, and College Graduates aiming for Tier-1 Tech Roles",
    duration: "14 Weeks (120+ Live Hours)",
    schedule: "Saturdays & Sundays (7:00 PM - 10:00 PM IST)",
    mode: "Live Interactive (Zoom/Meet)",
    nextBatchDate: "October 15, 2026",
    seatsLeft: 6,
    totalSeats: 30,
    rating: 4.9,
    reviewsCount: 340,
    shortDesc: "End-to-end hands-on mastery of Java 21, Spring Boot 3, Hibernate JPA, Microservices, Kafka, Docker & AWS.",
    overview: "This intensive, project-first live training takes you from fundamental Java core mechanics to designing, implementing, securing, and deploying enterprise-grade distributed microservices on AWS cloud. Includes 1-on-1 resume reviews and mock architectural interviews.",
    highlights: [
      "100% Live Instructor-led hands-on coding sessions",
      "Production-grade Capstone: Multi-Service FinTech Banking Engine",
      "Java 21 Virtual Threads & Low-latency Performance Engineering",
      "Spring Security 6, OAuth2 & JWT Stateless Token Security",
      "Apache Kafka Event-Driven Architecture & Saga Pattern",
      "Lifetime Access to Class Recordings, Code Repos & Cheatsheets"
    ],
    modules: [
      {
        moduleTitle: "Module 1: Advanced Java 21 & Concurrency",
        topics: [
          "JVM Internals, Garbage Collection Algorithms & JFR profiling",
          "Advanced Multithreading, ThreadPoolExecutor & Locks",
          "Java 21 Virtual Threads & Loom in production",
          "Modern Functional Streams, Pattern Matching, Records"
        ]
      },
      {
        moduleTitle: "Module 2: Spring Boot 3 & Data Persistence",
        topics: [
          "IoC Container, Component Scanning & Bean Lifecycle",
          "RESTful Architecture, DTOs, Custom Validators & Global Handlers",
          "Spring Data JPA, Hibernate Query Optimization, Resolving N+1",
          "Flyway Database Migrations & Redis L2 Cache integration"
        ]
      },
      {
        moduleTitle: "Module 3: Distributed Microservices Architecture",
        topics: [
          "Microservice Decomposition, API Gateways (Spring Cloud Gateway)",
          "Service Discovery with Eureka & Load Balancing with Resilience4j",
          "Distributed Tracing with Micrometer, Prometheus & Grafana",
          "Centralized Configuration with Spring Cloud Config & Vault"
        ]
      },
      {
        moduleTitle: "Module 4: Event-Driven Systems & Cloud Deployment",
        topics: [
          "Apache Kafka Topic Partitioning, Producers & Consumer Groups",
          "Implementing Distributed Saga Pattern for Eventual Consistency",
          "Multi-stage Docker builds, Kubernetes Pods & Helm Charts",
          "Automated CI/CD with GitHub Actions and Deployment to AWS"
        ]
      }
    ],
    technologiesCovered: [
      "Java 21", "Spring Boot 3", "Spring Data JPA", "PostgreSQL", 
      "Redis", "Apache Kafka", "Docker", "Kubernetes", "AWS", "JUnit 5"
    ],
    prerequisites: [
      "Basic understanding of any programming language (C++, Java, or Python)",
      "Fundamental knowledge of basic SQL queries"
    ],
    careerOutcomes: [
      "Senior Java Developer / Backend Engineer ($85k - $160k or 15 - 35 LPA)",
      "Microservices Backend Architect",
      "Equipped to clear technical rounds at Tier-1 product tech companies"
    ]
  },
  {
    id: "react-fullstack",
    slug: "modern-full-stack-react-typescript",
    title: "Full Stack Web Engineering (React 19 + Node.js + TypeScript)",
    badge: "Most Popular",
    targetAudience: "Frontend Developers, Junior Full Stack Devs, and UI/UX Engineers upgrading to Full-Stack",
    duration: "12 Weeks (90+ Live Hours)",
    schedule: "Tuesdays & Thursdays (8:00 PM - 10:30 PM IST)",
    mode: "Live Interactive (Zoom/Meet)",
    nextBatchDate: "October 22, 2026",
    seatsLeft: 8,
    totalSeats: 25,
    rating: 4.95,
    reviewsCount: 285,
    shortDesc: "Build modern, responsive full-stack applications with React 19, TypeScript, Node.js, Next.js, and PostgreSQL.",
    overview: "Master full-stack JavaScript & TypeScript engineering. We build sleek, high-performing web platforms with server components, type-safe API layers, robust auth, database modeling, and real-time collaboration with WebSockets.",
    highlights: [
      "TypeScript from zero to advanced utility types and generics",
      "React 19 Server Components, Actions & Optimistic UI Updates",
      "Full Stack Next.js 15 App Router & Server Actions",
      "Real-time WebSockets & Redis Pub/Sub",
      "Secure Authentication with JWT & Session Management",
      "Portfolio-Ready Capstone Project with Live Cloud Deployment"
    ],
    modules: [
      {
        moduleTitle: "Module 1: Deep Modern TypeScript & React 19",
        topics: [
          "Strict TypeScript, Generics, Discriminated Unions & Utility Types",
          "React 19 Hooks, useTransition, useActionState & Modern DOM mechanics",
          "State management strategies (Zustand, React Query/TanStack)",
          "Accessible UI Components with Tailwind/Vanilla CSS systems"
        ]
      },
      {
        moduleTitle: "Module 2: Scalable Node.js & REST/GraphQL Backend",
        topics: [
          "Node.js Event Loop, Streams, Worker Threads & Express/Fastify",
          "Type-safe API routes, Zod Validation & Middleware chains",
          "PostgreSQL database design with Prisma ORM / Drizzle",
          "Redis In-memory caching and session store"
        ]
      },
      {
        moduleTitle: "Module 3: Real-Time & Advanced Web Features",
        topics: [
          "Socket.io and WebSockets for live collaborative feeds",
          "File uploads to AWS S3 with pre-signed URLs",
          "Payment gateway integration (Stripe / Razorpay webhooks)",
          "Automated End-to-End testing with Playwright & Vitest"
        ]
      }
    ],
    technologiesCovered: [
      "React 19", "Next.js", "TypeScript", "Node.js", "Express", 
      "PostgreSQL", "Prisma", "Redis", "Socket.io", "Docker"
    ],
    prerequisites: [
      "Familiarity with HTML, CSS, and basic JavaScript functions"
    ],
    careerOutcomes: [
      "Full Stack Engineer (TypeScript/React)",
      "Frontend Architect specializing in high-performance web apps"
    ]
  },
  {
    id: "cloud-devops-bootcamp",
    slug: "cloud-devops-kubernetes-aws",
    title: "Cloud Architecture, DevOps & Kubernetes Bootcamp",
    badge: "Career Accelerator",
    targetAudience: "Developers, SysAdmins, and Tech Leads transitioning into DevOps, SRE, and Cloud Platform Roles",
    duration: "10 Weeks (70+ Live Hours)",
    schedule: "Saturdays & Sundays (10:00 AM - 1:00 PM IST)",
    mode: "Weekend Intensive",
    nextBatchDate: "November 5, 2026",
    seatsLeft: 5,
    totalSeats: 20,
    rating: 4.88,
    reviewsCount: 190,
    shortDesc: "Master Linux, Docker, Kubernetes clusters, Helm, Terraform IaC, GitHub Actions CI/CD, and AWS Cloud.",
    overview: "Real-world infrastructure automation from bare metal to cloud scale. Learn how modern tech giants run reliable, auto-scaling, self-healing platforms with zero downtime deployments and complete observability.",
    highlights: [
      "Hands-on cluster administration with Kubernetes (CKA-aligned)",
      "Infrastructure as Code (IaC) with Terraform & AWS Provider",
      "GitOps Continuous Delivery with ArgoCD & GitHub Actions",
      "Full Observability: Prometheus metrics, Grafana dashboards, Loki logs",
      "Real-world production outage simulation and debugging labs"
    ],
    modules: [
      {
        moduleTitle: "Module 1: Containers & Kubernetes Orchestration",
        topics: [
          "Container deep dive: Namespaces, cgroups, multi-stage Dockerfiles",
          "Kubernetes architecture: API Server, etcd, Kubelet, Kube-Proxy",
          "Workloads: Deployments, StatefulSets, DaemonSets & Jobs",
          "Networking: Services, Ingress Controllers, CoreDNS & CNI"
        ]
      },
      {
        moduleTitle: "Module 2: Cloud Platform (AWS) & Terraform",
        topics: [
          "AWS Networking: VPC, Subnets, Route Tables, NAT Gateways & Security Groups",
          "Compute & Containers: EC2, Auto-Scaling Groups, ECS Fargate, EKS",
          "Terraform fundamentals, state locking with S3/DynamoDB, modules",
          "IAM security policies, least privilege principle & secrets management"
        ]
      },
      {
        moduleTitle: "Module 3: GitOps, CI/CD & Observability",
        topics: [
          "Automated build, security scan (Trivy), and deploy pipelines",
          "ArgoCD declarative GitOps workflows and automated sync",
          "Prometheus monitoring, alertmanager rules & Grafana dashboards",
          "Distributed logging with Promtail and Grafana Loki"
        ]
      }
    ],
    technologiesCovered: [
      "Docker", "Kubernetes", "AWS", "Terraform", "GitHub Actions", 
      "ArgoCD", "Helm", "Prometheus", "Grafana", "Linux"
    ],
    prerequisites: [
      "Basic command line familiarity and general understanding of client-server software"
    ],
    careerOutcomes: [
      "DevOps Engineer / Platform Engineer ($90k - $170k)",
      "Site Reliability Engineer (SRE)",
      "Cloud Solutions Architect"
    ]
  },
  {
    id: "system-design-masterclass",
    slug: "system-design-distributed-systems",
    title: "System Design & Distributed Systems for Senior Engineers",
    badge: "Senior / Staff Level",
    targetAudience: "Engineers with 3+ years experience aiming for Senior, Staff, or Lead roles at Tier-1 companies",
    duration: "8 Weeks (50+ Live Hours)",
    schedule: "Sundays (5:00 PM - 9:00 PM IST)",
    mode: "Live Interactive (Zoom/Meet)",
    nextBatchDate: "November 12, 2026",
    seatsLeft: 7,
    totalSeats: 25,
    rating: 4.96,
    reviewsCount: 220,
    shortDesc: "Architect planet-scale systems, conquer high availability, distributed consensus, data sharding, and HLD/LLD.",
    overview: "Move beyond boilerplate code to high-level architectural thinking. Learn how to design scalable architectures that handle millions of requests per second with high availability and low latency.",
    highlights: [
      "Deep dive into 12+ real-world case studies (Uber, Netflix, Twitter, Stripe)",
      "Back-of-the-envelope calculations & capacity estimation frameworks",
      "Low-Level Design (LLD): Clean Architecture, Design Patterns, SOLID",
      "1-on-1 Mock System Design Interview with actionable written feedback"
    ],
    modules: [
      {
        moduleTitle: "Module 1: Scalability Building Blocks & Data Systems",
        topics: [
          "DNS, CDN, Anycast Routing, Reverse Proxies (Nginx, Envoy)",
          "Database Sharding, Read Replicas, Consistent Hashing Rings",
          "CAP Theorem, PACELC, Eventual Consistency & Consensus (Raft/Paxos)",
          "Caching strategies, Cache Stampede, Cache Invalidation techniques"
        ]
      },
      {
        moduleTitle: "Module 2: High Scale System Case Studies",
        topics: [
          "Designing a Distributed Rate Limiter (Token Bucket, Sliding Window)",
          "Designing a Global Ride-Sharing Dispatch System (QuadTrees, Geospatial)",
          "Designing a Video Streaming Platform (Transcoding, Adaptive Bitrate, CDN)",
          "Designing an Idempotent Payment & Settlement Gateway"
        ]
      }
    ],
    technologiesCovered: [
      "Distributed Systems", "PostgreSQL", "Kafka", "Redis", 
      "Cassandra", "Envoy", "Consistent Hashing", "Microservices"
    ],
    prerequisites: [
      "Prior software development experience and understanding of relational databases"
    ],
    careerOutcomes: [
      "Senior Software Engineer / Tech Lead / Staff Engineer",
      "Mastery of FAANG/Tier-1 System Design Interview Rounds"
    ]
  }
];
