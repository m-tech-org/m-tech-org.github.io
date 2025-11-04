import React from "react";
import createBadge from "@components/ui/Badge";
import GlobalConstants from "@constants/GlobalConstants";
import AnimatedLogo from "@components/common/AnimatedLogo.tsx";
import Tags from "@components/common/Tags.tsx";

const BADGE_TITLE = 'Hybrid • Enterprise • Product';
const HEADLINE = 'Engineering Your Advantage. Automating Today\'s Workflows and Building enterprise-grade automation & elegant software products';

const mainParagraphContent = [
    React.createElement('strong', {key: 'b0'}, 'M-Tech'), ' develops enterprise-grade software solutions — from scalable ',
    React.createElement('strong', {key: 'b1'}, 'Spring Boot microservices,'), ' to secure ',
    React.createElement('strong', {key: 'b2'}, 'cross-platform desktop applications,'), ' and ',
    React.createElement('strong', {key: 'b3'}, 'cloud-native SaaS systems.'), ' With strong expertise in ',
    React.createElement('strong', {key: 'b4'}, 'clean architecture, automation and DevOps integration,'), ' we enable businesses to accelerate ',
    React.createElement('strong', {key: 'b5'}, 'development,'), ' improve ',
    React.createElement('strong', {key: 'b6'}, 'reliability'), ' and ',
    React.createElement('strong', {key: 'b7'}, 'scale with confidence.'), ' Our stack spans ',
    React.createElement('strong', {key: 'b8'}, 'Java backend'), ' services, ',
    React.createElement('strong', {key: 'b9'}, 'modern frontend'), ' tooling and solid ',
    React.createElement('strong', {key: 'b10'}, 'CI/CD pipelines'), ' — delivering all with end-to-end automation and deep integration',
];

const coreValues = [
    {icon: '🔒', text: 'Security Hardening: Zero-trust architecture and robust data protection.'},
    {icon: '🚀', text: 'Scalability First: Designing systems for 10x growth from day one.'},
    {icon: '🛠️', text: 'DevOps Excellence: Seamless CI/CD pipelines and infrastructure as code.'}
    // {icon: '🔐', text: 'Hardened Security — Enforcing least-privilege access, encryption everywhere, and secure SDLC practices.'},
    // {icon: '📈', text: 'Performance & Scalability — Systems engineered for high throughput, resilience, and horizontal growth.'},
    // {icon: '⚙️', text: ' DevOps Discipline — CI/CD automation, GitOps workflows, and reproducible cloud infrastructure.'}
];

const industryList = "FinTech, EdTech, Automation, Startups, Manufacturing";


export default function createHero() {

    return React.createElement(
        'header',
        {
            style: {
                display: 'flex',
                flexWrap: 'wrap',
                margin: '24px auto',
                gap: 24,
                alignItems: 'flex-start',
                padding: '0 8px'
            }
        },
        React.createElement('div', {style: {flex: '1 1 55%'}},
            createBadge(BADGE_TITLE),
            React.createElement('h1', {
                style: {
                    fontSize: 36,
                    color: '#492079',
                    marginTop: 18,
                    lineHeight: 1.1,
                    fontWeight: 'normal'
                }
            }, HEADLINE),
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
                }, 'Our Core Engineering Principles:'),
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
        React.createElement('div', {style: {flex: '1 1 360px', minWidth: 280}},
            React.createElement('div', {
                    style: {
                        borderRadius: 18,
                        padding: 16,
                        border: '1px solid rgba(0,0,0,0.05)'
                    },
                    className: 'bg-white shadow-md p-4 hover:shadow-2xl',
                },
                <AnimatedLogo logoSrc={GlobalConstants.LOGO_ANIMATED} logoName={GlobalConstants.COMPANY_NAME}/>,
                React.createElement('div', {style: {textAlign: 'center', marginTop: 12}},
                    React.createElement(
                        'div', {
                            style: {
                                fontWeight: 700,
                                color: '#492079',
                                fontSize: 17,
                                fontStyle: 'italic',
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                            },
                            className: 'animate-typewriter',
                        }, GlobalConstants.COMPANY_MOTTO),
                    React.createElement('div', {
                        style: {
                            color: '#6b7280',
                            marginTop: 6,
                            fontSize: 15
                        }
                    }, 'The Product Arm: From prototype to production — we craft secure, maintainable, and high-performance software that scales with your vision.'),
                    React.createElement('div', {
                        style: {
                            color: '#1FB6FD',
                            marginTop: 10,
                            fontSize: 16,
                            fontWeight: 600,
                            animation: ''
                        }
                    }, 'Partner with us to bring your next venture idea to life.')
                ),
                <Tags tags={industryList}/>
            )
        )
    )
}