import React, {useState} from "react";
import GlassModalGeneric from "@components/common/GlassModalGeneric.tsx";

const services = [
    {
        title: 'Enterprise Java & Spring Boot',
        desc: 'Crafting resilient, high-throughput microservices with modern Java standards, observability integration, and robust API security for mission-critical applications.',
        details: [
            'Spring Boot microservices architecture with 99.9%+ uptime',
            'OAuth2/JWT security implementation & API gateway patterns',
            'Prometheus/Grafana monitoring & distributed tracing',
            'Database optimization & caching strategies (Redis)',
            'Event-driven architecture with message brokers (RabbitMQ/Kafka)'
        ]
    },
    {
        title: 'Cross-platform Desktop Applications',
        desc: 'Building secure, high-performance desktop applications using React framework, combining Java/NodeJS backend reliability with modern JavaScript/TypeScript frontends.',
        details: [
            'React framework for frontends with native system integration',
            'Small footprint applications (<10MB vs Electron 100MB+)',
            'Auto-update mechanisms & native installer packages',
            'System tray apps & background service integration'
        ]
    },
    {
        title: 'SaaS Platforms & Web Applications',
        desc: 'End-to-end development of scalable multi-tenant SaaS architectures with robust data isolation, subscription management, and exceptional user experiences.',
        details: [
            'Multi-tenant architecture with data isolation strategies',
            'Subscription billing integration (Stripe/Paddle)',
            'Real-time features with WebSocket implementations',
            'Progressive Web App (PWA) capabilities',
            'A/B testing frameworks & analytics integration'
        ]
    },
    {
        title: 'Cloud & DevOps Engineering',
        desc: 'Expertise in Kubernetes orchestration, Infrastructure as Code, and fully automated CI/CD pipelines with cloud cost optimization and security compliance.',
        details: [
            'Kubernetes (EKS/GKE) deployment & management',
            'Terraform/CloudFormation for infrastructure automation',
            'GitHub Actions/Jenkins CI/CD pipeline development',
            'Cloud cost optimization & resource monitoring',
            'Security compliance (SOC2, GDPR) implementation'
        ]
    },
    {
        title: 'AI & Automation Solutions',
        desc: 'Designing production-grade AI pipelines, implementing intelligent workflow automation, and developing computer vision applications for specialized industry needs.',
        details: [
            'ML pipeline development & model deployment',
            'RAG (Retrieval-Augmented Generation) implementations',
            'Workflow automation with document processing',
            'Computer vision for quality control & monitoring',
            'Custom chatbot development & AI agent systems'
        ]
    },
    {
        title: 'Technical Leadership & Consulting',
        desc: 'Providing strategic technical guidance through embedded engineering roles, architecture reviews, and technical due diligence for scaling organizations.',
        details: [
            'Embedded senior engineer engagements',
            'System architecture design & optimization reviews',
            'Technical due diligence for acquisitions/investments',
            'Team mentoring & development process improvement',
            'Technology stack evaluation & migration planning'
        ]
    }
];

export default function Services() {
    const [selectedService, setSelectedService] = useState<number | null>(null);

    const handleOpenModal = (index: number) => {
        setSelectedService(index);
    };

    const handleCloseModal = () => {
        setSelectedService(null);
    };

    const gridChildren = services.map((s, i) => {
        return React.createElement('div', {
                onClick: () => handleOpenModal(i),
                key: 'svc-' + i,
                className: "p-5 rounded-xl bg-white shadow-md border border-gray-100 flex flex-col cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300"
            },
            React.createElement('div', {className: "text-lg font-bold text-[#492079]"}, s.title),
            React.createElement('div', {className: "mt-2 text-gray-500 text-sm flex-grow"}, s.desc),
        )
    });

    return React.createElement(React.Fragment, null,
        React.createElement('section', {
                id: 'services',
                className: "mx-auto my-12 p-2"
            },
            React.createElement('h2', {
                className: "text-2xl font-bold text-[#492079] border-b-2 border-[#CBC5E3] pb-2 mb-4"
            }, 'Technical Services Portfolio'),
            React.createElement('p', {
                className: "text-gray-500 mt-1.5 text-base mb-6"
            }, 'We combine engineering discipline with product sensibility — offering both bespoke services and long-term product development partnerships to drive measurable business outcomes.'),
            React.createElement('div', {
                    className: 'mt-3 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5',
                },
                gridChildren
            )
        ),
        selectedService !== null && React.createElement(GlassModalGeneric, {
            isOpen: selectedService !== null,
            onClose: handleCloseModal,
            data: services[selectedService],
        })
    );
}