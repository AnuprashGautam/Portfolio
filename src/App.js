import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Home/Home";
import Timeline from "./Components/Timeline";
import Blogs from "./Components/Blogs";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Forum from "./Components/Forum";
import Skills from "./Components/Skills";

const App = () => {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/skills" element={<Skills />} />
      </Routes>
      
    </BrowserRouter>
  );
};

export default App;
