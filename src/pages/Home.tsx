import React from 'react'
import footerText from "@components/common/Footer.tsx";
import createNav from "@components/common/Navigation.tsx";
import createHero from "@components/home/Hero";
import createServices from "@components/home/Services.tsx";
import createWork from "@components/home/Work.tsx";
import createCTA from "@components/home/Actions.tsx";

export default function Home() {
    return React.createElement('div', {
            style: {
                minHeight: '100vh',
                background: 'linear-gradient(180deg,#fff,#f3eef8)',
                color: '#111827',
                fontFamily: 'Inter, system-ui, sans-serif',
                padding: '0 0 24px 0'
            }
        },
        createNav(),
        createHero(),
        createServices(),
        createWork(),
        createCTA(),
        React.createElement('footer', {
            style: {
                marginTop: 48,
                textAlign: 'center',
                color: '#6b7280',
                fontSize: 14,
                padding: '16px 24px'
            }
        }, footerText())
    )
}