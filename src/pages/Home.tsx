import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/Hero";
import WhatIDoSection from "../components/WhatIDo";
import ProjectsSection from "../components/Projects";
import TechStackSection from "../components/TechStack";
import LetsWorkTogether from "../components/LetsWorkTogether";
import Footer from "../components/Footer";

const Home: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => {
    return (
        <main>
            <Header isScrolled={isScrolled} />
            <HeroSection />
            <WhatIDoSection />
            <ProjectsSection />
            <TechStackSection />
            <LetsWorkTogether />
            <Footer />
        </main>
    );
};


export default Home;