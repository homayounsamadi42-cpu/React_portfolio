import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Services />
        <Contact />
      </main>
    </div>
  );
}