import React from 'react'

var LOGO_SRC = '/images/logo.svg'

function createBadge(text: string) {
    return React.createElement(
        'span',
        { className: 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium', style: { backgroundColor: 'rgba(203,197,227,0.4)', color: '#492079' } },
        text
    )
}

function createNav() {
    return React.createElement(
        'nav',
        { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 1024, margin: '0 auto', padding: '16px' } },
        React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 12 } },
            React.createElement('img', { src: LOGO_SRC, alt: 'M-Tech', style: { height: 40, width: 40, objectFit: 'contain' } }),
            React.createElement('div', null,
                React.createElement('div', { style: { fontSize: 16, fontWeight: 700 } }, 'M-Tech'),
                React.createElement('div', { style: { fontSize: 11, color: '#6b7280', marginTop: 2 } }, 'Engineering Tomorrow. Automating Today.')
            )
        ),
        React.createElement('div', { style: { display: 'flex', gap: 12 } },
            React.createElement('a',
                { href: 'mailto:mtechltd2021@gmail.com' ,
                  style: { backgroundColor: '#1FB6FD', color: '#fff', borderRadius: 6, padding: '8px 12px', border: 'none', cursor: 'pointer' } }, 'Contact')
        )
    )
}

function createHero() {
    return React.createElement(
        'header',
        { style: { display: 'flex', maxWidth: 1024, margin: '24px auto', gap: 24, alignItems: 'flex-start' } },
        React.createElement('div', { style: { flex: 1 } },
            createBadge('Hybrid • Enterprise & Product'),
            React.createElement('h1', { style: { fontSize: 32, color: '#492079', marginTop: 18, lineHeight: 1.1 } }, 'Building enterprise-grade automation & elegant software products.'),
            React.createElement('p', { style: { color: '#6b7280', maxWidth: 720, marginTop: 12 } }, 'M-Tech crafts robust Spring Boot microservices, cross-platform desktop apps, and cloud-native SaaS systems — with end-to-end automation and DevOps.'),
            React.createElement('div', { style: { marginTop: 18, display: 'flex', gap: 12 } },
            )
        ),
        React.createElement('div', { style: { width: 360, flex: '0 0 360px' } },
            React.createElement('div', { style: { borderRadius: 18, padding: 16, boxShadow: '0 10px 30px rgba(0,0,0,0.06)', background: '#fff' } },
                React.createElement('img', { src: LOGO_SRC, alt: 'M-Tech', style: { height: 120, width: 120, display: 'block', margin: '0 auto' } }),
                React.createElement('div', { style: { textAlign: 'center', marginTop: 12 } },
                    React.createElement('div', { style: { fontWeight: 700, color: '#492079' } }, 'M-Tech Studio'),
                    React.createElement('div', { style: { color: '#6b7280', marginTop: 6, fontSize: 13 } }, 'From prototype to production — secure, maintainable, high-performance software.')
                ),
                React.createElement('div', { style: { display: 'flex', gap: 8, justifyContent: 'center', marginTop: 12 } },
                    React.createElement('div', { style: { padding: '6px 10px', borderRadius: 20, background: 'rgba(203,197,227,0.4)', fontSize: 12 } }, 'Fintech'),
                    React.createElement('div', { style: { padding: '6px 10px', borderRadius: 20, background: 'rgba(203,197,227,0.4)', fontSize: 12 } }, 'Edtech'),
                    React.createElement('div', { style: { padding: '6px 10px', borderRadius: 20, background: 'rgba(203,197,227,0.4)', fontSize: 12 } }, 'Startups')
                )
            )
        )
    )
}

function createServices() {
    var services = [
        { title: 'Enterprise Java & Spring Boot', desc: 'Microservices, high-throughput APIs, observability, and security hardening.' },
        { title: 'Cross-platform Desktop Apps', desc: 'Tauri + Rust + modern JS UIs — lightweight, secure, and native-feeling.' },
        { title: 'SaaS Platforms & Web Apps', desc: 'Scalable SaaS architectures, multi-tenant systems, and product UX.' },
        { title: 'Cloud & DevOps', desc: 'Infrastructure as code, CI/CD, container orchestration and cost optimization.' },
        { title: 'Automation & AI', desc: 'Workflow automation, computer vision pilots, and production-grade AI pipelines.' },
        { title: 'Others', desc: 'Embed engineers, architecture reviews, and long-term partnerships.' }
    ]

    var gridChildren = services.map(function (s, i) {
        return React.createElement('div', { key: 'svc-' + i, style: { padding: 16, borderRadius: 12, background: '#fff', boxShadow: '0 6px 18px rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.04)' } },
            React.createElement('div', { style: { fontSize: 18, fontWeight: 700, color: '#492079' } }, s.title),
            React.createElement('div', { style: { marginTop: 6, color: '#6b7280' } }, s.desc),
            React.createElement('div', { style: { marginTop: 10 } }, React.createElement('a', { href: '#', style: { color: '#1FB6FD', textDecoration: 'none' } }, 'Learn more →'))
        )
    })

    return React.createElement('section', { id: 'services', style: { maxWidth: 1024, margin: '24px auto', padding: 8 } },
        React.createElement('h2', { style: { fontSize: 20, fontWeight: 700, color: '#492079' } }, 'Services'),
        React.createElement('p', { style: { color: '#6b7280', marginTop: 6, maxWidth: 640 } }, 'We combine engineering discipline with product sensibility — offering both bespoke services and product development partnerships.'),
        React.createElement('div', { style: { marginTop: 12, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12 } },
            gridChildren
        )
    )
}

function createWork() {
    var cases = [
        { title: 'Fintech Reconciliation Engine', subtitle: 'High-throughput ledger services' },
        { title: 'Edtech Interactive Desktop App', subtitle: 'Cross-platform learning tool' },
        { title: 'Automation Pipeline for Claims', subtitle: 'AI-assisted document processing' }
    ]

    var cards = cases.map(function (c, idx) {
        return React.createElement('div', { key: 'case-' + idx, style: { padding: 16, borderRadius: 12, background: 'linear-gradient(180deg,#fff,#f3eef8)', border: '1px solid rgba(0,0,0,0.03)' } },
            React.createElement('div', { style: { fontSize: 12, color: '#6b7280' } }, 'Case Study'),
            React.createElement('div', { style: { marginTop: 6, fontWeight: 700, color: '#492079' } }, c.title),
            React.createElement('div', { style: { marginTop: 6, color: '#6b7280' } }, c.subtitle),
            React.createElement('div', { style: { marginTop: 10, display: 'flex', gap: 10, alignItems: 'center' } },
                React.createElement('div', { style: { height: 40, width: 40, borderRadius: 8, background: 'rgba(31,182,253,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' } }, '🏷️'),
                React.createElement('div', { style: { color: '#6b7280' } }, 'Results: improved throughput, lowered infra cost, faster time-to-market.')
            )
        )
    })

    return React.createElement('section', { id: 'work', style: { maxWidth: 1024, margin: '24px auto', padding: 8 } },
        React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
        ),
    )
}

function createBrand() {
    var swatches = [
        { hex: '#4B2175', name: 'M-Tech Violet', usage: 'Primary' },
        { hex: '#492079', name: 'Deep Purple', usage: 'Secondary' },
        { hex: '#1FB6FD', name: 'Electric Blue', usage: 'Accent' },
        { hex: '#36C2FC', name: 'Sky Cyan', usage: 'Accent' },
        { hex: '#CBC5E3', name: 'Soft Lavender', usage: 'Neutral' }
    ]

    var swChildren = swatches.map(function (s, i) {
        return React.createElement('div', { key: 'sw-' + i, style: { display: 'flex', flexDirection: 'column', gap: 6 } },
            React.createElement('div', { style: { height: 56, borderRadius: 8, background: s.hex, border: '1px solid rgba(0,0,0,0.04)' } }),
            React.createElement('div', { style: { fontSize: 12, color: '#6b7280' } }, s.name),
            React.createElement('div', { style: { fontFamily: 'monospace', fontSize: 12, color: '#6b7280' } }, s.hex + ' • ' + s.usage)
        )
    })

    return React.createElement('section', { id: 'brand', style: { maxWidth: 1024, margin: '24px auto', padding: 8, borderRadius: 12, background: 'rgba(255,255,255,0.8)' } },
        React.createElement('h2', { style: { fontSize: 20, fontWeight: 700, color: '#492079' } }, 'Brand & Design System'),
        React.createElement('div', { style: { marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 } },
            React.createElement('div', null,
                React.createElement('h3', { style: { fontSize: 16, fontWeight: 600, color: '#374151' } }, 'Color Palette'),
                React.createElement('div', { style: { marginTop: 8, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8 } }, swChildren),
                React.createElement('h3', { style: { marginTop: 12, fontSize: 16, fontWeight: 600, color: '#374151' } }, 'Typography'),
                React.createElement('p', { style: { color: '#6b7280' } }, 'Headings: Poppins / Space Grotesk — Body: Inter / Manrope.')
            ),
            React.createElement('div', null,
                React.createElement('h3', { style: { fontSize: 16, fontWeight: 600, color: '#374151' } }, 'UI Components (examples)'),
                React.createElement('div', { style: { marginTop: 8, display: 'flex', flexDirection: 'column', gap: 12 } },
                    React.createElement('div', { style: { padding: 12, borderRadius: 8, border: '1px solid rgba(0,0,0,0.04)' } },
                        React.createElement('div', { style: { fontSize: 12, color: '#6b7280' } }, 'Primary Button'),
                        React.createElement('div', { style: { marginTop: 8 } }, React.createElement('button', { style: { padding: '8px 12px', borderRadius: 6, background: '#1FB6FD', color: '#fff', border: 'none' } }, 'Primary'))
                    ),
                    React.createElement('div', { style: { padding: 12, borderRadius: 8, border: '1px solid rgba(0,0,0,0.04)' } },
                        React.createElement('div', { style: { fontSize: 12, color: '#6b7280' } }, 'Card'),
                        React.createElement('div', { style: { marginTop: 8, padding: 12, background: '#fff', borderRadius: 8, boxShadow: '0 6px 18px rgba(0,0,0,0.04)' } }, 'Card content — title, short description, CTA')
                    )
                )
            )
        )
    )
}

function footerText() {
    return '© 2021 - ' + new Date().getFullYear() + ' M-Tech — Engineering Tomorrow. Automating Today.'
}

// Exported component (JSX-free)
export default function Home() {
    return React.createElement('div', { style: { minHeight: '100vh', background: 'linear-gradient(180deg,#fff,#f3eef8)', color: '#111827', fontFamily: 'Inter, system-ui, sans-serif', padding: 24 } },
        createNav(),
        createHero(),
        createServices(),
        React.createElement('footer', { style: { marginTop: 32, textAlign: 'center', color: '#6b7280' } }, footerText())
    )
}