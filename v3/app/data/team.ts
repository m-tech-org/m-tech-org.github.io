export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    id: "ceo",
    name: "Sarah Chen",
    role: "Chief Executive Officer",
    bio: "Visionary leader with 15+ years in technology innovation and digital transformation.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    id: "cto",
    name: "Michael Rodriguez",
    role: "Chief Technology Officer",
    bio: "Expert in cloud architecture and AI solutions, driving technical excellence.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    id: "design-lead",
    name: "Emily Watson",
    role: "Head of Design",
    bio: "Award-winning designer creating intuitive and beautiful user experiences.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
  {
    id: "dev-lead",
    name: "James Kumar",
    role: "Lead Developer",
    bio: "Full-stack expert passionate about building scalable, high-performance applications.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
  },
];
