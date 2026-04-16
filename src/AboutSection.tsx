import "./AboutSection.css";
import sumaya from "./assets/sumaya.jpeg";
import cvPdf from "./assets/Somaya NEW.pdf";

function AboutSection() {
  return (
    <section className="hero">
      <div className="heroSection" id="aboutme">
        <div className="heroImage">
          <img className="devimg" src={sumaya} alt="Sumaya portrait" />
        </div>
        <div className="abouttext">
          <h1 className="title">
            About <span style={{ color: "#c6a1f4" }}>Me</span>
          </h1>
          <p className="descrip">
            I am a WordPress and Full-Stack Developer with hands-on experience in building and managing
            professional websites and eCommerce platforms. I specialize in WordPress customization,
            plugin integration, hosting management, modern frontend frameworks, and backend architecture,
            with a strong focus on performance, usability, and clean design.
          </p>

          <div className="about-actions">
            <a className="btn btn-primary" href={cvPdf} download>
              Download CV
            </a>
            <a className="btn btn-secondary" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
