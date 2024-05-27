import React from "react";
import "./Footer.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-Top-Component">
        <div className="Left-Component">
            <div class="logo">
                <p id="name">Anuprash</p>
                <p id="surname">&nbsp;Gautam</p>
            </div>

            <div className="Socials">
                <a href="https://www.linkedin.com/in/anuprashgautam/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://github.com/AnuprashGautam" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="mailto:your-email@gmail.com" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-envelope"></i>
                </a>
            </div>
        </div>

        <div className="Middle-Component">
          <p id="site-map">Site Map</p>
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
          <p>About</p>
        </div>

        <div className="Right-Component">
        <form class="request-project-container">
        <input type="email" id="email" name="email" placeholder="Send Project Request"></input>
        </form>
        <button type="submit" id="request-project-button">Request Project</button>
        </div>
      </div>
      <div className="Footer-Bottom-Component">
        <p>Privacy Policy</p>
        <p>Copyright @2024</p>
        <p>Terms of Service</p>
      </div>
    </div>
  );
};

export default Footer;
