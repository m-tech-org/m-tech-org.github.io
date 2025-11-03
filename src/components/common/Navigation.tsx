import React from "react";
import GlobalConstants from "../../constants/GlobalConstants.tsx";
import ContactUsButton from "../home/ContactUs.tsx";

export default function createNav() {
    return React.createElement(
        'nav',
        {
            style: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '0 auto',
                padding: '16px'
            }
        },
        React.createElement('div', {style: {display: 'flex', alignItems: 'center', gap: 12}},
            React.createElement('a', {href: '/'},
                React.createElement('img', {
                        src: GlobalConstants.LOGO_MINI_SRC,
                        alt: GlobalConstants.COMPANY_NAME,
                        href: '/',
                        style: {height: 80, width: 80, objectFit: 'contain'}
                    }
                )
            ),
            React.createElement('div', null,
                React.createElement('div', {
                    style: {
                        fontSize: 16,
                        fontWeight: 700
                    }
                }, GlobalConstants.COMPANY_NAME),
                React.createElement('div', {
                    style: {
                        fontSize: 11,
                        color: '#6b7280',
                        marginTop: 2
                    }
                }, GlobalConstants.COMPANY_MOTTO)
            )
        ),
        <ContactUsButton/>
    )
}