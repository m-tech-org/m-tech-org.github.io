import GlobalConstants from "../../constants/GlobalConstants.tsx";
import React from "react";

function footerText() {
    return '© 2021 - ' + new Date().getFullYear() + ' ' + GlobalConstants.COMPANY_NAME + ' — ' + GlobalConstants.COMPANY_MOTTO
}

export default function createFooter() {

    return React.createElement('footer', {
        style: {
            marginTop: 48,
            textAlign: 'center',
            color: '#6b7280',
            fontSize: 14,
            padding: '16px 24px'
        }
    }, footerText())
}