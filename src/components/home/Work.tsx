import React from "react";

const cases = [
    {
        title: 'Fintech Reconciliation Engine',
        subtitle: 'High-throughput ledger services',
        desc: 'Designed and implemented a distributed microservice architecture to handle millions of transactions daily, achieving sub-second reconciliation times and 99.99% data integrity.'
    },
    {
        title: 'Edtech Interactive Desktop App',
        subtitle: 'Cross-platform learning tool',
        desc: 'Developed a secure, offline-first application using Tauri and Rust, providing a highly responsive and engaging learning experience for students across Windows and macOS.'
    },
    {
        title: 'Automation Pipeline for Claims',
        subtitle: 'AI-assisted document processing',
        desc: 'Deployed a cloud-native pipeline integrating custom computer vision models to automatically classify, extract, and validate claims documents, reducing manual review time by 70%.'
    }
];

const cards = cases.map(function (c, idx) {
    return React.createElement('div', {
            key: 'case-' + idx,
            style: {
                padding: 20,
                borderRadius: 12,
                background: 'linear-gradient(180deg,#fff,#f3eef8)',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 6px 18px rgba(0,0,0,0.04)'
            }
        },
        React.createElement('div', {
            style: {
                fontSize: 12,
                color: '#492079',
                fontWeight: 700,
                marginBottom: 8
            }
        }, 'FEATURED CASE STUDY'),
        React.createElement('div', {style: {fontSize: 20, fontWeight: 700, color: '#492079'}}, c.title),
        React.createElement('div', {
            style: {
                marginTop: 4,
                fontSize: 14,
                color: '#1FB6FD',
                fontWeight: 600
            }
        }, c.subtitle),
        React.createElement('p', {style: {marginTop: 10, color: '#6b7280', fontSize: 14, lineHeight: 1.5}}, c.desc),
        React.createElement('div', {style: {marginTop: 14, display: 'flex', gap: 10, alignItems: 'center'}},
            React.createElement('div', {
                style: {
                    padding: '4px 8px',
                    borderRadius: 4,
                    background: '#1FB6FD',
                    color: '#fff',
                    fontSize: 12,
                    fontWeight: 600
                }
            }, 'Impact'),
            React.createElement('div', {
                style: {
                    color: '#492079',
                    fontSize: 14,
                    fontWeight: 500
                }
            }, 'Measurable results: improved throughput, lowered infra cost, faster time-to-market.')
        )
    )
});

export default function createWork() {

    return React.createElement('section', {id: 'work', style: {maxWidth: 1024, margin: '48px auto', padding: 8}},
        React.createElement('h2', {
            style: {
                fontSize: 24,
                fontWeight: 700,
                color: '#492079',
                borderBottom: '2px solid #CBC5E3',
                paddingBottom: 8,
                marginBottom: 16
            }
        }, 'Recent Project Engagements'),
        React.createElement('p', {
            style: {
                color: '#6b7280',
                marginTop: 6,
                maxWidth: 800,
                fontSize: 16,
                marginBottom: 24
            }
        }, 'Highlighting recent engagements that showcase our core competencies and delivery impact across target industries.'),
        React.createElement('div', {
                style: {
                    marginTop: 12,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 20
                }
            },
            cards
        )
    )
}