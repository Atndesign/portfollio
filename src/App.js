import React, { useState } from "react";
import Header from "./components/Header";
import AboutSection from "./components/About";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  let now = new Date();
  let year = now.getFullYear();
  return (
    <div className="App">
      <Header />
      <AboutSection />
      <Skills />
      <Projects />
      <Contact />
      <footer className="desktop-only">
        &copy; Moulun Kevin {year}
        <a href="#home">
          <i className="fas fa-chevron-up"></i>
        </a>
      </footer>
    </div>
  );
}

export default App;
