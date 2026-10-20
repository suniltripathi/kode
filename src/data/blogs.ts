export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: "Java & Spring" | "System Design" | "Frontend" | "DevOps & Cloud";
  readTime: string;
  publishedDate: string;
  tags: string[];
  content: string[];
}

export const blogs: BlogPost[] = [
  {
    id: "java-virtual-threads",
    slug: "java-21-virtual-threads-vs-platform-threads",
    title: "Java 21 Virtual Threads Under High Concurrency: The Death of Reactive Spaghetti?",
    summary: "How Project Loom virtual threads achieve millions of concurrent tasks with standard blocking code without thread exhaustion.",
    category: "Java & Spring",
    readTime: "7 min read",
    publishedDate: "September 15, 2026",
    tags: ["Java 21", "Concurrency", "Virtual Threads", "Performance"],
    content: [
      "For over two decades, Java developers faced a challenging dilemma when scaling I/O-heavy applications: write clean, synchronous code that blocks an expensive operating system thread, or resort to reactive programming (Project Reactor, WebFlux) that fragments call stacks and complicates debugging.",
      "With Java 21's official finalization of Virtual Threads (JEP 444), the rules have changed completely. Virtual threads are lightweight user-mode threads managed by the Java Virtual Machine rather than the underlying OS kernel.",
      "An OS platform thread typically requires 1 MB of stack memory and incurs noticeable context-switching overhead in the kernel scheduler. In stark contrast, a Virtual Thread requires only a few hundred bytes of memory on the Java heap.",
      "When a virtual thread executes a blocking operation — such as waiting for a database response or an HTTP call — the JVM unmounts the virtual thread from its underlying carrier thread (a ForkJoinPool worker). The carrier thread is immediately freed up to execute other virtual threads.",
      "Key takeaways for enterprise production:",
      "1. Do NOT pool virtual threads! They are ephemeral and meant to be created and discarded per task.",
      "2. Beware of Pinning: synchronized blocks or native methods can pin the virtual thread to its carrier. Replace synchronized with java.util.concurrent.locks.ReentrantLock.",
      "3. In Spring Boot 3.2+, simply enabling 'spring.threads.virtual.enabled=true' handles incoming Tomcat web requests on virtual threads seamlessly."
    ]
  },
  {
    id: "system-design-rate-limiter",
    slug: "designing-distributed-rate-limiter-redis",
    title: "Designing a Resilient Distributed Rate Limiter with Redis & Sliding Window",
    summary: "Architecting a rate limiting gateway handling 100,000 requests/sec with low latency, zero race conditions, and graceful degradation.",
    category: "System Design",
    readTime: "9 min read",
    publishedDate: "August 28, 2026",
    tags: ["System Design", "Redis", "Distributed Systems", "Algorithms"],
    content: [
      "Rate limiting is one of the most frequently asked architectural problems in Tier-1 system design interviews, and an essential defensive mechanism in production microservices.",
      "Without rate limiting, abusive traffic, brute-force attacks, or sudden traffic spikes can cascade failures across downstream databases and internal services.",
      "Why not fixed window counters? The classic pitfall is the boundary burst issue: if a user is allowed 100 requests per minute, they could send 100 requests at 00:59 and another 100 at 01:01, causing 200 requests within a 2-second span — overwhelming downstream servers.",
      "The Sliding Window Log algorithm solves this by maintaining a Redis Sorted Set (ZSET) where each score and member represents the Unix timestamp in milliseconds.",
      "To execute atomically without race conditions, we package the removal of old timestamps (ZREMRANGEBYSCORE), counting of current elements (ZCARD), and insertion of the new timestamp (ZADD) inside a single Lua script.",
      "Because Redis processes Lua scripts atomically on a single thread, no locks are needed and execution completes in sub-millisecond response times."
    ]
  },
  {
    id: "react-19-actions",
    slug: "mastering-react-19-actions-and-optimistic-ui",
    title: "Mastering React 19 Actions, useActionState, and useOptimistic",
    summary: "Say goodbye to repetitive useState(loading) and useEffect fetching. Here is how modern React simplifies forms and asynchronous state.",
    category: "Frontend",
    readTime: "6 min read",
    publishedDate: "August 12, 2026",
    tags: ["React 19", "JavaScript", "Frontend", "Web Dev"],
    content: [
      "Every React developer knows the tedious boilerplate of asynchronous form submissions: declaring useState for isPending, another for error, another for data, and manually catching errors in async try/catch blocks.",
      "React 19 revolutionizes this with first-class Actions support and the new useActionState hook.",
      "By passing an asynchronous action function into useActionState, React automatically manages the pending state, error state, and optimistic updates across transitions.",
      "Paired with useOptimistic, your user interfaces can render the expected outcome immediately upon button click, before the server response returns, and automatically roll back if an error occurs.",
      "This approach dramatically reduces component code by 40% and eliminates jittery loading spinners."
    ]
  },
  {
    id: "zerodowntime-k8s-argocd",
    slug: "zero-downtime-kubernetes-argocd-gitops",
    title: "Zero-Downtime Deployments with Kubernetes and ArgoCD: A Production Walkthrough",
    summary: "Step-by-step blueprint for configuring rolling updates, readiness probes, termination grace periods, and GitOps pipelines.",
    category: "DevOps & Cloud",
    readTime: "8 min read",
    publishedDate: "July 24, 2026",
    tags: ["Kubernetes", "DevOps", "ArgoCD", "GitOps", "Cloud"],
    content: [
      "Have you ever experienced 502 Bad Gateway errors during a Kubernetes rolling update? Even when maxSurge and maxUnavailable are configured, applications often drop active in-flight requests during pod termination.",
      "To achieve true 100% zero-downtime deployments, you must coordinate three critical Kubernetes lifecycle hooks:",
      "1. Readiness Probes: Never route traffic to a newly spawned container until its internal caches are warmed up and database connections are validated.",
      "2. PreStop Hook: Add a small sleep command (e.g. sleep 10) in the container's lifecycle preStop hook to allow Kubernetes endpoints and kube-proxy iptables rules to propagate before SIGTERM is sent.",
      "3. TerminationGracePeriodSeconds: Ensure the grace period is longer than your longest running request, giving active transactions time to finish.",
      "With ArgoCD monitoring your Git repository, code merged into main triggers an automated, audited canary release with automated rollback if error rates increase."
    ]
  }
];
