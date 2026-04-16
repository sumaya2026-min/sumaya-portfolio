import "./HeroSection.css";
import sumaya from "./assets/sumaya.jpeg";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function HeroSection() {
  return (
    <section className="hero">
      <div className="heroSection" id="home">
        <div className="heroText">
          <p className="subtitle">Welcome to my world</p>
          <h1 className="title">
            Hi, I'm Sumaya Alminawi <br />
            <span style={{ color: "#c6a1f4" }}>a Developer</span>
          </h1>
          <p className="descrip">
            I use development as a structured problem-solving tool to simplify digital experiences
            and guide users through every interaction. I don't build features just to add complexity,
            but implement technologies with purpose, ensuring performance, clarity, and scalability.
            My approach combines clean code, thoughtful architecture, and user-focused logic to
            deliver solutions that are both functional and intuitive.
          </p>
        </div>
        <div className="heroImage">
          <img className="devimg" src={sumaya} alt="img-dev" />
        </div>
      </div>
      <p className="socialtitle">find with me</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/sumaya-minawi/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>

        <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>

        <a href="https://wa.me/961XXXXXXXX" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
