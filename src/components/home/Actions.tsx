import React from "react";

export default function createCTA() {

    return React.createElement(
        'section',
        {
            style: {
                maxWidth: 1024,
                margin: '48px auto',
                padding: 24,
                borderRadius: 16,
                background: '#492079',
                boxShadow: '0 10px 30px rgba(73,32,121,0.5)',
                textAlign: 'center'
            }
        },
        React.createElement('h2', {
            style: {
                fontSize: 28,
                fontWeight: 800,
                color: '#fff',
                marginBottom: 8
            }
        }, 'Ready to Automate Your Future?'),
        React.createElement('p', {
            style: {
                color: '#CBC5E3',
                fontSize: 18,
                marginBottom: 20
            }
        }, 'Discuss your enterprise automation, SaaS platform, or next product with our expert team.'),
        React.createElement('a',
            {
                href: 'mailto:mtechltd2021@gmail.com',
                style: {
                    backgroundColor: '#1FB6FD',
                    color: '#fff',
                    borderRadius: 8,
                    padding: '12px 24px',
                    border: 'none',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: 16,
                    display: 'inline-block',
                    boxShadow: '0 6px 15px rgba(31, 182, 253, 0.4)'
                }
            },
            'Request a Consultation'
        )
    );
}
