import type {
  ExperienceItem,
  FooterCol,
  Hobby,
  Project,
  Skill,
  Stat,
} from "@/types/portfolio";

export const skills: Skill[] = [
  // Frontend
  { name: "React.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "React Router", category: "Frontend" },
  { name: "Redux", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Shadcn UI", category: "Frontend" },

  // Backend
  { name: "Spring Boot", category: "Backend" },
  { name: "Spring Hibernate", category: "Backend" },
  { name: "Spring Security", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "Socket.io", category: "Backend" },
  { name: "WebRTC", category: "Backend" },
  { name: "Prisma ORM", category: "Backend" },

  // Databases
  { name: "PostgreSQL", category: "Databases" },
  { name: "MySQL", category: "Databases" },
  { name: "Redis", category: "Databases" },

  // DevOps & Cloud
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "AWS EC2", category: "DevOps" },
  { name: "AWS S3", category: "DevOps" },
  { name: "Nginx", category: "DevOps" },
  { name: "GitHub Actions", category: "DevOps" },
  { name: "Jenkins", category: "DevOps" },
  { name: "Linux", category: "DevOps" },

  // Languages
  { name: "C++", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "Go", category: "Languages" },
  { name: "JavaScript", category: "Languages" },

  // Computer Science
  { name: "Data Structures", category: "Computer Science" },
  { name: "Algorithms", category: "Computer Science" },
  { name: "DBMS", category: "Computer Science" },
  { name: "Operating Systems", category: "Computer Science" },
  { name: "Computer Networks", category: "Computer Science" },
  { name: "OOP", category: "Computer Science" },

  // Tools
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "VS Code", category: "Tools" },
  { name: "Neovim", category: "Tools" },
  { name: "Figma", category: "Tools" },
];

export const skillGroups: Skill["category"][] = [
  "Frontend",
  "Backend",
  "Databases",
  "DevOps",
  "Languages",
  "Computer Science",
  "Tools",
];

export const projects: Project[] = [
  {
    title: "Online Coding Platform",
    description:
      "Distributed code execution platform built with Spring Boot and RabbitMQ. Supports asynchronous code execution through scalable worker nodes, secure sandboxing, test case evaluation, and real-time submission tracking.",
    tags: ["Java", "Spring Boot", "RabbitMQ", "PostgreSQL", "Docker", "Redis"],
    year: "2025",
    status: "Live",
    sourceHref: "https://github.com/vishalborle45",
    liveHref: "https://your-live-url.com",
    architectureHref: "https://github.com/vishalborle45",
  },
  {
    title: "Realtime Whiteboard",
    description:
      "Collaborative whiteboard application powered by WebRTC and WebSockets. Enables peer-to-peer communication, real-time drawing synchronization, room management, and low-latency collaboration.",
    tags: ["React", "Node.js", "WebRTC", "Socket.io", "Docker"],
    year: "2025",
    status: "Live",
    sourceHref: "https://github.com/vishalborle45",
    liveHref: "https://your-live-url.com",
    architectureHref: "https://github.com/vishalborle45",
  },
  {
    title: "HLS Video Streaming Platform",
    description:
      "Netflix-style video streaming service with HLS playback, FFmpeg transcoding, adaptive bitrate streaming, cloud storage, and scalable media delivery architecture.",
    tags: ["Next.js", "Node.js", "FFmpeg", "AWS S3", "Docker", "Redis"],
    year: "2025",
    status: "Live",
    sourceHref: "https://github.com/vishalborle45",
    liveHref: "https://your-live-url.com",
    architectureHref: "https://github.com/vishalborle45",
  },
  {
    title: "DevOps CI/CD & Monitoring Stack",
    description:
      "Production-grade DevOps infrastructure featuring automated CI/CD pipelines, containerized deployments, centralized monitoring, alerting, and observability dashboards.",
    tags: ["Jenkins", "Docker", "Kubernetes", "Prometheus", "Grafana", "AWS"],
    year: "2025",
    status: "Live",
    sourceHref: "https://github.com/vishalborle45",
    liveHref: "https://your-live-url.com",
    architectureHref: "https://github.com/vishalborle45",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Full Stack Developer Intern",
    company: "Nxtqube",
    period: "Mar 2025 – Oct 2025",
    desc: "Contributing to production SaaS platforms by building scalable frontend and backend features. Working with React.js, Node.js, MySQL, Socket.io, Docker, and AWS while delivering client-driven functionality and improving overall product experience.",
  },
];

export const stats: Stat[] = [
  { label: "Years exp.", value: "0.6" },
  { label: "Projects", value: "4+" },
  { label: "Leetcode Problems", value: "300+" },
  { label: "Arch Linux", value: "90%" },
];

export const hobbies: Hobby[] = [
  { label: "Watching Anime", emoji: "🎌" },
  { label: "Reading Tech Blogs", emoji: "📚" },
  { label: "Music", emoji: "🎧" },
  { label: "Calisthenics", emoji: "🏋️" },
];

export const footerNav: FooterCol[] = [
  {
    heading: "General",
    links: [
      { label: "Home", href: "#" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "About",
    links: [
      { label: "About Me", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Hobbies", href: "#hobbies" },
    ],
  },
  {
    heading: "Elsewhere",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/vishalborle45",
        external: true,
      },
      { label: "Leetcode", href: "https://leetcode.com", external: true },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/vishalborle",
        external: true,
      },
      { label: "Twitter", href: "https://twitter.com", external: true },
    ],
  },
];
