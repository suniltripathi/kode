export interface ResourceItem {
  id: string;
  title: string;
  category: "Cheat Sheet" | "Interview Guide" | "Architecture Blueprint" | "Code Starter";
  format: "PDF" | "Markdown / Repo" | "Diagram / Board" | "Template";
  downloadCount: string;
  description: string;
  link: string;
  isExternal: boolean;
  tags: string[];
}

export const resources: ResourceItem[] = [
  {
    id: "spring-boot-security-cheatsheet",
    title: "Complete Spring Boot 3 & Security 6 Production Checklist",
    category: "Cheat Sheet",
    format: "PDF",
    downloadCount: "14,200+",
    description: "Handy 12-page PDF reference summarizing filter chain orders, JWT validation, CSRF handling, CORS configuration, and production actuator security.",
    link: "#",
    isExternal: false,
    tags: ["Java", "Spring Boot", "Security", "Cheatsheet"]
  },
  {
    id: "system-design-interview-handbook",
    title: "Top 50 System Design Interview Questions & Reference Architectures",
    category: "Interview Guide",
    format: "PDF",
    downloadCount: "22,500+",
    description: "Curated high-level and low-level system design questions asked at Google, Amazon, Microsoft, and Uber, including detailed architecture diagrams and trade-off tables.",
    link: "#",
    isExternal: false,
    tags: ["System Design", "HLD", "Interviews", "Architecture"]
  },
  {
    id: "docker-k8s-handbook",
    title: "Kubernetes & Docker Commands Quick Reference Card",
    category: "Cheat Sheet",
    format: "PDF",
    downloadCount: "18,900+",
    description: "One-page printable cheat sheet with essential kubectl commands, resource debugging commands, container inspection tips, and Helm shortcuts.",
    link: "#",
    isExternal: false,
    tags: ["Kubernetes", "Docker", "DevOps"]
  },
  {
    id: "fullstack-clean-starter",
    title: "Enterprise Full Stack Starter Monorepo (Spring Boot + React 19)",
    category: "Code Starter",
    format: "Markdown / Repo",
    downloadCount: "8,700+",
    description: "Production-ready template repository with Docker Compose, automated CI/CD pipeline, JWT auth, database migration, and dark-mode UI library ready to clone.",
    link: "https://github.com",
    isExternal: true,
    tags: ["React 19", "Spring Boot", "Template", "Monorepo"]
  },
  {
    id: "java-concurrency-patterns",
    title: "Java Multithreading & Concurrency Interview Pattern Guide",
    category: "Interview Guide",
    format: "PDF",
    downloadCount: "16,100+",
    description: "Master producer-consumer, thread pools, CountDownLatch, CyclicBarrier, CompletableFuture, and Java 21 Virtual Thread design idioms with working code samples.",
    link: "#",
    isExternal: false,
    tags: ["Java", "Concurrency", "Interviews"]
  },
  {
    id: "cloud-architecture-blueprints",
    title: "AWS Cloud Reference Architectures (Multi-AZ, Zero-Downtime)",
    category: "Architecture Blueprint",
    format: "Diagram / Board",
    downloadCount: "11,400+",
    description: "Excalidraw & SVG architectural diagrams of resilient microservice topologies on AWS VPC, EKS, RDS Aurora multi-master, and CloudFront CDN caching layers.",
    link: "#",
    isExternal: false,
    tags: ["AWS", "Cloud", "Architecture", "Microservices"]
  }
];
