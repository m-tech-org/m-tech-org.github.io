export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    category: "Development",
    description:
      "Custom web applications built with cutting-edge technologies to deliver exceptional user experiences and robust functionality.",
    icon: "Code",
    features: ["Responsive Design", "Progressive Web Apps", "E-commerce Solutions", "Content Management Systems"],
  },
  {
    id: "mobile-apps",
    title: "Mobile Applications",
    category: "Development",
    description:
      "Native and cross-platform mobile apps that engage users and drive business growth on iOS and Android platforms.",
    icon: "Smartphone",
    features: ["iOS & Android Development", "Cross-platform Solutions", "App Store Optimization", "Push Notifications"],
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    category: "Infrastructure",
    description:
      "Scalable cloud infrastructure and migration services to optimize performance, security, and cost-efficiency.",
    icon: "Cloud",
    features: ["Cloud Migration", "Infrastructure as Code", "DevOps Implementation", "Serverless Architecture"],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    category: "Innovation",
    description:
      "Intelligent solutions powered by artificial intelligence and machine learning to automate processes and unlock insights.",
    icon: "Brain",
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Recommendation Systems"],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    category: "Security",
    description:
      "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.",
    icon: "Shield",
    features: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response"],
  },
  {
    id: "consulting",
    title: "IT Consulting",
    category: "Strategy",
    description:
      "Strategic technology consulting to align your IT infrastructure with business objectives and drive digital transformation.",
    icon: "Lightbulb",
    features: ["Digital Strategy", "Technology Roadmapping", "Process Optimization", "Change Management"],
  },
];

export const serviceCategories = ["All", "Development", "Infrastructure", "Innovation", "Security", "Strategy"];
