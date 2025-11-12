export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  client?: string;
  year: string;
  outcome: string;
}

export const projects: Project[] = [
  {
    id: "fintech-platform",
    title: "FinTech Payment Platform",
    category: "Web Development",
    description: "A secure, scalable payment processing platform handling millions of transactions daily.",
    longDescription:
      "Developed a comprehensive payment processing platform for a leading financial services company. The solution integrates with multiple payment gateways, provides real-time fraud detection, and offers a seamless user experience across web and mobile platforms.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    technologies: ["Java", "React", "PostgreSQL", "Redis", "AWS", "SpringBoot"],
    client: "Gl*** Fin*** Corp",
    year: "2023",
    outcome: "Processed $500M+ in transactions with 99.99% uptime",
  },
  {
    id: "healthcare-app",
    title: "Healthcare Management System",
    category: "Mobile Apps",
    description: "Mobile-first healthcare platform connecting patients with providers seamlessly.",
    longDescription:
      "Created an intuitive healthcare management application that streamlines patient-provider communication, appointment scheduling, and medical record management. The platform ensures HIPAA compliance while delivering exceptional user experience.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    technologies: ["Java", "SpringBoot", "Flutter", "Firebase", "MongoDB"],
    client: "Medi**** Solutions",
    year: "2023",
    outcome: "50,000+ active users, 4.8-star rating",
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Marketplace",
    category: "Web Development",
    description: "Multi-vendor marketplace with advanced analytics and inventory management.",
    longDescription:
      "Built a sophisticated e-commerce platform supporting thousands of vendors and millions of products. Features include real-time inventory tracking, AI-powered recommendations, and comprehensive analytics dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    technologies: ["Java", "SpringBoot", "Next.js", "GraphQL", "Elasticsearch", "Docker"],
    client: "Ret***Hub Inc",
    year: "2024",
    outcome: "2M+ monthly visitors, 35% conversion rate increase",
  },
  {
    id: "iot-dashboard",
    title: "IoT Monitoring Dashboard",
    category: "Cloud Solutions",
    description: "Real-time monitoring and analytics for industrial IoT devices.",
    longDescription:
      "Designed and implemented a cloud-based IoT platform for monitoring and controlling industrial equipment. The system processes millions of data points per second and provides actionable insights through advanced analytics.",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80",
    technologies: ["Java", "SpringBoot", "React", "Python", "AWS IoT", "TimescaleDB", "Grafana"],
    client: "Indust**** Tech Ltd",
    year: "2023",
    outcome: "10,000+ connected devices, 40% efficiency improvement",
  },
  {
    id: "ai-chatbot",
    title: "AI Customer Support Bot",
    category: "AI & Machine Learning",
    description: "Intelligent chatbot reducing support costs by 60% while improving satisfaction.",
    longDescription:
      "Developed an advanced AI-powered chatbot using natural language processing to handle customer inquiries. The system learns from interactions and integrates seamlessly with existing CRM systems.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    technologies: ["Python", "TensorFlow", "OpenAI", "FastAPI", "Redis"],
    client: "Tech****ort Pr****",
    year: "2024",
    outcome: "85% query resolution rate, 60% cost reduction",
  },
  {
    id: "blockchain-supply",
    title: "Blockchain Supply Chain",
    category: "Innovation",
    description: "Transparent supply chain tracking using blockchain technology.",
    longDescription:
      "Implemented a blockchain-based supply chain management system providing end-to-end transparency and traceability. The solution ensures product authenticity and reduces fraud in the supply chain.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    technologies: ["Ethereum", "Solidity", "Web3.js", "IPFS", "Node.js"],
    client: "Lo***ain Gl**al",
    year: "2023",
    outcome: "100% product traceability, 45% fraud reduction",
  },
];
