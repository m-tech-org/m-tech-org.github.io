import React from 'react'
import createNav from "@components/common/Navigation.tsx";
import createHero from "@components/home/Hero.tsx";
import createServices from "@components/home/Services.tsx";
import createWork from "@components/home/Work.tsx";
import createCTA from "@components/home/Actions.tsx";
import createFooter from "@components/common/Footer.tsx";

export default function Home() {
    return React.createElement('div', {
            style: {
                padding: "0 1.5%",
                width: "auto",
                minHeight: '100vh',
                background: 'linear-gradient(180deg,#fff,#f3eef8)',
                color: '#111827',
                fontFamily: 'Inter, system-ui, sans-serif',
            }
        },
        createNav(),
        createHero(),
        // createServices(),
        // createWork(),
        // createCTA(),
        createFooter(),
    );
}