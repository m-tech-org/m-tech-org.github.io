import React from 'react'
import Navigation from "@components/common/Navigation";
import Hero from "@components/home/Hero";
import Services from "@components/home/Services";
import Work from "@components/home/Work";
import CTA from "@components/home/Actions";
import Footer from "@components/common/Footer";

export default function Home() {
    return (
        <div style={{}}>
            <Navigation/>
            <Hero/>
            <Services/>
            {/*<Work/>*/}
            {/*<CTA/>*/}
            <Footer/>
        </div>
    );
}