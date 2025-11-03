import React from "react";

const services = [
    {
        title: 'Enterprise Java & Spring Boot',
        desc: 'Crafting resilient, high-throughput microservices. We focus on modern Java standards, observability integration (Prometheus/Grafana), and API security (OAuth2/JWT) for mission-critical applications.'
    },
    {
        title: 'Cross-platform Desktop Apps',
        desc: 'Building lightweight, secure, and performant desktop applications using the Tauri framework, combining Rust’s speed with elegant modern JavaScript UIs for a native feel.'
    },
    {
        title: 'SaaS Platforms & Web Apps',
        desc: 'End-to-end development of scalable multi-tenant SaaS architectures, focusing on robust data isolation, subscription management, and exceptional product user experience (UX).'
    },
    {
        title: 'Cloud & DevOps Acceleration',
        desc: 'Expertise in Kubernetes (EKS/GKE), Infrastructure as Code (Terraform), and fully automated CI/CD pipelines (GitHub Actions/Jenkins). We optimize cloud spend and ensure compliance.'
    },
    {
        title: 'Automation & AI Solutions',
        desc: 'Designing production-grade AI pipelines, implementing workflow automation for back-office processes, and developing computer vision pilots for specialized industry needs.'
    },
    {
        title: 'Strategic Partnerships',
        desc: 'Offering flexible long-term engagement models including embedded senior engineers, comprehensive architecture reviews, and technical due diligence for scaling organizations.'
    }
];

const gridChildren = services.map(function (s, i) {

    return React.createElement('div', {
            key: 'svc-' + i,
            style: {
                padding: 20,
                borderRadius: 12,
                background: '#fff',
                boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                border: '1px solid rgba(0,0,0,0.04)'
            }
        },
        React.createElement('div', {style: {fontSize: 18, fontWeight: 700, color: '#492079'}}, s.title),
        React.createElement('div', {style: {marginTop: 8, color: '#6b7280', fontSize: 14}}, s.desc),
        React.createElement('div', {style: {marginTop: 14}}, React.createElement('a', {
            href: '#',
            style: {color: '#1FB6FD', textDecoration: 'none', fontWeight: 600}
        }, 'Explore Solutions →'))
    )
});


export default function createServices() {


    return React.createElement('section', {
            id: 'services',
            style: {
                // maxWidth: 1024,
                margin: '48px auto',
                padding: 8
            }
        },
        React.createElement('h2', {
            style: {
                fontSize: 24,
                fontWeight: 700,
                color: '#492079',
                borderBottom: '2px solid #CBC5E3',
                paddingBottom: 8,
                marginBottom: 16
            }
        }, 'Technical Services Portfolio'),
        React.createElement('p', {
            style: {
                color: '#6b7280',
                marginTop: 6,
                maxWidth: 800,
                fontSize: 16,
                marginBottom: 24
            }
        }, 'We combine engineering discipline with product sensibility — offering both bespoke services and long-term product development partnerships to drive measurable business outcomes.'),
        React.createElement('div', {
                style: {
                    marginTop: 12,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 20
                }
            },
            gridChildren
        )
    )
}
