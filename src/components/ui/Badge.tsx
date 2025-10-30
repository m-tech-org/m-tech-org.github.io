import React from "react";

export default function createBadge(text: any) {
    return React.createElement(
        'span',
        {
            className: 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
            style: {backgroundColor: 'rgba(203,197,227,0.4)', color: '#492079'}
        },
        text
    )
}