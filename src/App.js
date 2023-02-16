import React from "react";
import About from "./components/About";
import BackToTopButton from "./components/BackToTopButton";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <BackToTopButton />
    </main>
  );
}
