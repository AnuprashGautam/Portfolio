import React from "react";
import "./Home.css";
import About from "../Components/About";
import Timeline from "../Components/Timeline";
import Projects from "../Components/Projects";
import Forum from "../Components/Forum";
import Blogs from "../Components/Blogs";
import Skills from "../Components/Skills";
import Quote from "../Components/Quote";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>

      <div className="QuoteContainer">
        <Quote/>
      </div>
    
      <div className="About">
        <About/>
      </div>

      <div className="Timeline">
        <Timeline/>
      </div>

      <div className="Skills">
        <Skills/>
      </div>
      
      <div className="Projects">
        <Projects/>
      </div>

      <div className="Blogs">
        <Blogs/>
      </div>
      
      <div className="Forum">
        <Forum/>
      </div>

      <div className="Footer">
        <Footer/>
      </div>

    </div>
  );
};

export default Home;
