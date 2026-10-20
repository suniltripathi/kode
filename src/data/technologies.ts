export interface Technology {
  id: string;
  name: string;
  category: "Backend" | "Frontend" | "Cloud & DevOps" | "Database & Messaging" | "Architecture";
  badge: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  concepts: string[];
  roadmap: { step: string; details: string }[];
  projects: string[];
  prerequisites: string[];
  popularInBatches: boolean;
}

export const technologies: Technology[] = [
  {
    id: "java",
    name: "Core Java & Modern Java (21+)",
    category: "Backend",
    badge: "Enterprise Standard",
    shortDesc: "Master Object-Oriented Design, JVM internals, multithreading, concurrency, and Java 21 Virtual Threads.",
    fullDesc: "From OOP principles and SOLID design patterns to advanced JVM memory modeling, garbage collection tuning, concurrent data structures, functional programming with Streams, and the cutting-edge Java 21 Virtual Threads for high-throughput concurrent systems.",
    iconName: "Coffee",
    concepts: [
      "OOP & SOLID Architecture",
      "Java Collections Framework Deep Dive",
      "Multithreading, Locks & Executors",
      "Java 21 Virtual Threads & Loom",
      "JVM Memory Model & GC Tuning",
      "Functional Programming & Streams API",
      "Reflection & Annotations",
      "Unit Testing with JUnit 5 & Mockito"
    ],
    roadmap: [
      { step: "Phase 1: Foundations", details: "Core syntax, OOP paradigms, Exception handling, Collections & Generics" },
      { step: "Phase 2: Concurrency & Internals", details: "Threads, synchronized blocks, java.util.concurrent, JVM bytecode & heap layout" },
      { step: "Phase 3: Modern Features", details: "Records, Pattern Matching, Sealed Classes, Virtual Threads & Structured Concurrency" },
      { step: "Phase 4: Production Readiness", details: "Benchmarking with JMH, Profiling with VisualVM/JFR, Performance optimization" }
    ],
    projects: [
      "High-throughput multi-threaded web crawler",
      "Custom thread pool executor and task queue engine",
      "In-memory key-value database with persistent log"
    ],
    prerequisites: ["Basic logic and programming fundamentals"],
    popularInBatches: true
  },
  {
    id: "spring-boot",
    name: "Spring Boot 3 & Microservices",
    category: "Backend",
    badge: "Most In-Demand",
    shortDesc: "Build enterprise REST APIs, Spring Data JPA, Spring Security 6, OAuth2, and scalable cloud microservices.",
    fullDesc: "Spring Boot 3 brings native AOT compilation with GraalVM and modernized security. In our deep-dive training, learn dependency injection, Spring Data JPA optimization, JWT & OAuth2 security, distributed tracing, Spring Cloud Eureka/Gateway, resilience with Resilience4j, and Kafka event-driven architectures.",
    iconName: "Cpu",
    concepts: [
      "IoC Container & Bean Lifecycle",
      "RESTful API Design & Validation",
      "Spring Data JPA & Hibernate N+1 Solutions",
      "Spring Security 6 & JWT / OAuth2",
      "Microservice Architecture & API Gateway",
      "Service Discovery with Netflix Eureka",
      "Distributed Tracing (Micrometer & Zipkin)",
      "Resilience4j Circuit Breaker & Rate Limiter"
    ],
    roadmap: [
      { step: "Phase 1: Spring Core & Web", details: "Dependency Injection, Controllers, DTO mapping, Global Exception Handling" },
      { step: "Phase 2: Persistence & Security", details: "Entities, Relationships, Pagination, Indexing, JWT stateless authentication" },
      { step: "Phase 3: Microservices Ecosystem", details: "Spring Cloud Config, Service Registry, OpenFeign, Spring Cloud Gateway" },
      { step: "Phase 4: Distributed Patterns", details: "Saga Pattern, Eventual Consistency, Distributed Caching, Containerization" }
    ],
    projects: [
      "Enterprise Banking & Wallet Microservices with Saga Pattern",
      "Multi-tenant SaaS API with Role-Based Access Control (RBAC)",
      "Distributed Order & Inventory Management with Apache Kafka"
    ],
    prerequisites: ["Strong Java knowledge and basic relational database concepts"],
    popularInBatches: true
  },
  {
    id: "react",
    name: "React 19 & Next.js Ecosystem",
    category: "Frontend",
    badge: "Industry Leader",
    shortDesc: "Build lightning-fast web applications with React 19, Server Components, Hooks, TypeScript, and state management.",
    fullDesc: "Modern frontend engineering demands deep understanding of rendering cycles, state management, concurrent features, and server-side capabilities. Master React 19 hooks, compiler concepts, TypeScript typings, component design systems, and Next.js full-stack features.",
    iconName: "Layers",
    concepts: [
      "Component Architecture & Props/State",
      "Modern React 19 Hooks & useActionState",
      "Server Components & Streaming SSR",
      "TypeScript with React Component Patterns",
      "State Management (Zustand / Redux Toolkit)",
      "Performance Optimization & Code Splitting",
      "Form Handling & Zod Schema Validation",
      "Modern CSS Architecture & Design Systems"
    ],
    roadmap: [
      { step: "Phase 1: React & TypeScript Basics", details: "JSX, Virtual DOM, Props, State, Component Lifecycle, Type-safe hooks" },
      { step: "Phase 2: Advanced Hooks & Data Fetching", details: "useMemo, useCallback, useRef, custom hooks, React Query / TanStack" },
      { step: "Phase 3: Scalable App Architecture", details: "Routing, Global stores, Layouts, Design system components, Accessibility" },
      { step: "Phase 4: Next.js & Server Rendering", details: "App Router, Server Actions, Dynamic rendering, Edge runtime deployment" }
    ],
    projects: [
      "Interactive Real-Time Analytics Dashboard with WebSockets",
      "E-Commerce Storefront with Server-Side Rendering and Stripe checkout",
      "Modular Kanban Task Management Board with Drag & Drop"
    ],
    prerequisites: ["HTML5, CSS3, Modern JavaScript ES6+"],
    popularInBatches: true
  },
  {
    id: "cloud-devops",
    name: "Docker, Kubernetes & AWS Cloud",
    category: "Cloud & DevOps",
    badge: "Essential for 2026",
    shortDesc: "Containerize applications, orchestrate with Kubernetes, automate CI/CD pipelines, and deploy on AWS cloud.",
    fullDesc: "Bridging the gap between software development and cloud platform reliability. Hands-on experience with multi-stage Docker builds, Kubernetes Pods, Deployments, Services, Helm charts, CI/CD pipelines with GitHub Actions, and core AWS cloud services (ECS, EKS, Lambda, S3, RDS).",
    iconName: "Cloud",
    concepts: [
      "Docker Multi-stage Builds & Optimization",
      "Kubernetes Pods, ReplicaSets & Deployments",
      "K8s Services, Ingress & ConfigMaps",
      "Helm Package Manager for K8s",
      "AWS Core Infrastructure (EC2, VPC, S3, IAM)",
      "AWS Managed Containers (ECS Fargate & EKS)",
      "CI/CD with GitHub Actions & GitOps",
      "Infrastructure as Code with Terraform"
    ],
    roadmap: [
      { step: "Phase 1: Container Fundamentals", details: "Docker images, containers, networks, volumes, compose multi-container stacks" },
      { step: "Phase 2: Kubernetes Orchestration", details: "Cluster architecture, manifests, auto-scaling (HPA), zero-downtime rolling updates" },
      { step: "Phase 3: Cloud Architecture (AWS)", details: "VPC networking, security groups, RDS managed DB, S3 storage, IAM least privilege" },
      { step: "Phase 4: Production Automation", details: "Automated test-build-deploy pipelines, ArgoCD GitOps, Prometheus & Grafana monitoring" }
    ],
    projects: [
      "Complete GitOps-driven deployment of microservices to AWS EKS",
      "Self-healing containerized web application cluster with autoscaling",
      "Automated multi-environment CI/CD pipeline with GitHub Actions and DockerHub"
    ],
    prerequisites: ["Linux basics and command-line familiarity"],
    popularInBatches: true
  },
  {
    id: "databases-kafka",
    name: "PostgreSQL, Redis & Apache Kafka",
    category: "Database & Messaging",
    badge: "High Performance",
    shortDesc: "Master ACID databases, indexing strategies, distributed in-memory caching with Redis, and event streaming with Kafka.",
    fullDesc: "Modern architectures rely on specialized data stores. Master relational database indexing, query optimization, connection pooling, and ACID guarantees in PostgreSQL; high-speed caching and distributed locks in Redis; and resilient event-driven architecture with Apache Kafka topic partitioning and consumer groups.",
    iconName: "Database",
    concepts: [
      "Relational Modeling & 3NF Normalization",
      "PostgreSQL B-Tree Indexes, EXPLAIN ANALYZE",
      "Database Transactions, Isolation Levels & MVCC",
      "Redis Cache Patterns (Cache-Aside, Write-Through)",
      "Redis Pub/Sub, Streams & Distributed Locks (Redlock)",
      "Kafka Topics, Partitions, Offsets & Consumer Groups",
      "Idempotent Producers & Exactly-Once Semantics",
      "Schema Registry & Avro Serialization"
    ],
    roadmap: [
      { step: "Phase 1: Relational Mastery", details: "Schema design, complex joins, subqueries, CTEs, window functions in PostgreSQL" },
      { step: "Phase 2: Query Optimization & Indexing", details: "Execution plans, composite indexes, partition tables, connection pooling (HikariCP)" },
      { step: "Phase 3: Caching & Fast State", details: "Redis data structures, TTL eviction policies, distributed session management" },
      { step: "Phase 4: Event Streaming Architecture", details: "Kafka cluster setup, event-driven decoupling, consumer rebalancing, dead letter queues" }
    ],
    projects: [
      "Real-Time Flash Sale Engine with Redis Distributed Locks & Stock Verification",
      "Event-Driven Activity Stream Processing with Kafka and PostgreSQL",
      "High-Performance Database Migration & Performance Tuning Benchmark Suite"
    ],
    prerequisites: ["Basic SQL knowledge"],
    popularInBatches: false
  },
  {
    id: "system-design",
    name: "System Design & Architecture",
    category: "Architecture",
    badge: "Senior / Lead Track",
    shortDesc: "Design planetary-scale distributed systems, master CAP theorem, rate limiters, sharding, and high availability.",
    fullDesc: "Geared towards mid-level and senior engineers preparing for Staff/Lead roles or FAANG/Tier-1 architecture interviews. Learn high-level and low-level system design, back-of-the-envelope estimations, trade-offs between consistency and latency, database sharding, CDN caching, and fault-tolerant distributed algorithms.",
    iconName: "Server",
    concepts: [
      "CAP Theorem & PACELC Trade-offs",
      "Vertical vs Horizontal Scaling",
      "Load Balancing Algorithms & Reverse Proxies",
      "Database Sharding & Consistent Hashing",
      "Distributed Rate Limiter Design (Token/Leaky Bucket)",
      "Message Queues vs Event Streams",
      "Microservices vs Monolith trade-off analysis",
      "High Availability, Disaster Recovery & Multi-Region"
    ],
    roadmap: [
      { step: "Phase 1: Architectural Building Blocks", details: "DNS, CDN, Load Balancers, API Gateways, Caching tiers, DB read replicas" },
      { step: "Phase 2: Distributed Data Strategies", details: "Master-replica, Multi-master, Sharding keys, Consistent hashing rings" },
      { step: "Phase 3: Classic System Designs", details: "Design URL Shortener, Uber Geo-dispatch, WhatsApp messenger, Netflix video streaming" },
      { step: "Phase 4: Failure Modes & Resiliency", details: "Graceful degradation, Bulkheads, Circuit breakers, Chaos engineering principles" }
    ],
    projects: [
      "Architectural Blueprint & Prototype for a Global URL Shortener with Analytics",
      "Distributed Job Scheduler with Distributed Consensus and Leader Election",
      "Real-Time Notification Service handling millions of concurrent subscribers"
    ],
    prerequisites: ["Experience with at least one backend language and database"],
    popularInBatches: true
  }
];
