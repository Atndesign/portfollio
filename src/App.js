import React from "react";
import Header from "./components/Header";
import AboutSection from "./components/About";
import Skills from "./components/skills";
import Projects from "./components/projects";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutSection />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
