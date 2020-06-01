import React from "react";
import Header from "./components/Header";
import AboutSection from "./components/About";
import Skills from "./components/skills";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutSection />
      <Skills />
    </div>
  );
}

export default App;
