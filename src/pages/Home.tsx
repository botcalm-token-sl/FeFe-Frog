import React from 'react'


import { useRef } from "react";

import MainLayout from "@/Layouts/MainLayout";
import Hero from "@/section/mainSection/Hero";
import About from "@/section/mainSection/About";
import Features from "@/section/mainSection/Features";
import Tokenomics from "@/section/mainSection/Tokenomics";
import Roadmap from "@/section/mainSection/Roadmap";

const Home = () => {
 
  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    features: useRef<HTMLDivElement>(null),
    tokenomics: useRef<HTMLDivElement>(null),
    roadmap: useRef<HTMLDivElement>(null),
  };

  return (
    <MainLayout sectionRefs={sectionRefs}>
      <div ref={sectionRefs.home}>
        <Hero />
      </div>
      <div ref={sectionRefs.about}>
        <About />
      </div>
      <div ref={sectionRefs.roadmap}>
        <Roadmap />
      </div>
      <div ref={sectionRefs.tokenomics}>
        <Tokenomics />
      </div>
      <div ref={sectionRefs.features}>
        <Features />
      </div>
     
     
    </MainLayout>
  );
};

export default Home;


