import React from "react";
import createBadge from "@components/ui/Badge.tsx";
import GlobalConstants from "@constants/GlobalConstants.tsx";

const coreValues = [
    {icon: '🔒', text: 'Security Hardening: Zero-trust architecture and robust data protection.'},
    {icon: '🚀', text: 'Scalability First: Designing systems for 10x growth from day one.'},
    {icon: '🛠️', text: 'DevOps Excellence: Seamless CI/CD pipelines and infrastructure as code.'}
];

const mainParagraphContent = [
    'M-Tech crafts robust ',
    React.createElement('strong', {key: 'b1'}, 'Spring Boot microservices'),
    ', secure ',
    React.createElement('strong', {key: 'b2'}, 'cross-platform desktop apps'),
    ', and cloud-native ',
    React.createElement('strong', {key: 'b3'}, 'SaaS systems'),
    ' — all delivered with end-to-end automation and deep ',
    React.createElement('strong', {key: 'b4'}, 'DevOps'),
    ' integration',
];

export default function createHero() {

    return React.createElement(
        'header',
        {
            style: {
                display: 'flex',
                flexWrap: 'wrap',
                // maxWidth: 1024,
                margin: '24px auto',
                gap: 24,
                alignItems: 'flex-start',
                padding: '0 8px'
            }
        },
        React.createElement('div', {style: {flex: '1 1 55%'}},
            createBadge('Hybrid • Enterprise • Product'),
            React.createElement('h1', {
                style: {
                    fontSize: 36,
                    color: '#492079',
                    marginTop: 18,
                    lineHeight: 1.1
                }
            }, 'Building enterprise-grade automation & elegant software products.'),
            React.createElement('p', {
                style: {
                    color: '#6b7280',
                    maxWidth: 720,
                    marginTop: 12,
                    fontSize: 17
                }
            }, ...mainParagraphContent),

            React.createElement('div', {style: {marginTop: 24}},
                React.createElement('h3', {
                    style: {
                        fontSize: 18,
                        fontWeight: 600,
                        color: '#492079'
                    }
                }, 'Our Core Commitments:'),
                React.createElement('ul', {style: {marginTop: 10, listStyle: 'none', padding: 0}},
                    coreValues.map((item, index) =>
                        React.createElement('li', {
                                key: index,
                                style: {display: 'flex', alignItems: 'center', marginTop: 8, color: '#6b7280'}
                            },
                            React.createElement('span', {style: {marginRight: 10, fontSize: 18}}, item.icon),
                            React.createElement('span', {style: {fontSize: 15}}, item.text)
                        )
                    )
                )
            )
        ),
        React.createElement('div', {style: {flex: '1 1 360px', minWidth: 280}}, // Right sidebar area
            React.createElement('div', {
                    style: {
                        borderRadius: 18,
                        padding: 16,
                        boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                        background: '#fff',
                        border: '1px solid rgba(0,0,0,0.05)'
                    }
                },
                React.createElement('img', {
                    src: GlobalConstants.LOGO_MINI_SRC,
                    alt: GlobalConstants.COMPANY_NAME,
                    style: {height: 120, width: 120, display: 'block', margin: '0 auto', objectFit: 'contain'}
                }),
                React.createElement('div', {style: {textAlign: 'center', marginTop: 12}},
                    React.createElement('div', {
                        style: {
                            fontWeight: 700,
                            color: '#492079',
                            fontSize: 16,
                            fontStyle: 'italic'
                        }
                    }, GlobalConstants.COMPANY_MOTTO),
                    React.createElement('div', {
                        style: {
                            color: '#6b7280',
                            marginTop: 6,
                            fontSize: 14
                        }
                    }, 'The product arm: From prototype to production — secure, maintainable, high-performance software.'),
                    React.createElement('div', {
                        style: {
                            color: '#1FB6FD',
                            marginTop: 10,
                            fontSize: 13,
                            fontWeight: 600
                        }
                    }, 'Partner with us on your next venture.')
                ),
                React.createElement('div', {style: {display: 'flex', gap: 8, justifyContent: 'center', marginTop: 16}},
                    React.createElement('div', {
                        style: {
                            padding: '6px 10px',
                            borderRadius: 20,
                            background: 'rgba(73,32,121,0.1)',
                            fontSize: 12,
                            color: '#492079',
                            fontWeight: 600
                        }
                    }, 'Fintech'),
                    React.createElement('div', {
                        style: {
                            padding: '6px 10px',
                            borderRadius: 20,
                            background: 'rgba(73,32,121,0.1)',
                            fontSize: 12,
                            color: '#492079',
                            fontWeight: 600
                        }
                    }, 'Edtech'),
                    React.createElement('div', {
                        style: {
                            padding: '6px 10px',
                            borderRadius: 20,
                            background: 'rgba(73,32,121,0.1)',
                            fontSize: 12,
                            color: '#492079',
                            fontWeight: 600
                        }
                    }, 'Startups')
                )
            )
        )
    )
}