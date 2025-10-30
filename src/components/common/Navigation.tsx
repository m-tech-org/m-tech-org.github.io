import React from "react";
import GlobalConstants from "../../constants/GlobalConstants.tsx";

export default function createNav() {
    return React.createElement(
        'nav',
        {
            style: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                maxWidth: 1024,
                margin: '0 auto',
                padding: '16px'
            }
        },
        React.createElement('div', {style: {display: 'flex', alignItems: 'center', gap: 12}},
            React.createElement('img', {
                src: GlobalConstants.LOGO_MINI_SRC,
                alt: GlobalConstants.COMPANY_NAME,
                style: {height: 40, width: 40, objectFit: 'contain'}
            }),
            React.createElement('div', null,
                React.createElement('div', {style: {fontSize: 16, fontWeight: 700}}, GlobalConstants.COMPANY_NAME),
                React.createElement('div', {
                    style: {
                        fontSize: 11,
                        color: '#6b7280',
                        marginTop: 2
                    }
                }, GlobalConstants.COMPANY_MOTTO)
            )
        ),
        React.createElement('div', {style: {display: 'flex', gap: 12}},
            React.createElement('a',
                {
                    href: GlobalConstants.MAIL_ID,
                    style: {
                        backgroundColor: '#1FB6FD',
                        color: '#fff',
                        borderRadius: 6,
                        padding: '8px 12px',
                        border: 'none',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        fontWeight: 600,
                        boxShadow: '0 4px 10px rgba(31, 182, 253, 0.3)'
                    }
                }, 'Contact Us')
        )
    )
}