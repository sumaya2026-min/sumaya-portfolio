import "./FeaturesSection.css";
import { FaLaptopCode, FaRocket, FaWordpress } from "react-icons/fa";

function FeaturesSection() {
  return (
    <div className="feature" id="feature">
      <p className="sub-box">Features</p>
      <h1 className="title-box">What I Do</h1>
      <div className="boxes">
        <div className="box">
          <FaWordpress className="iconbox" />
          <h3 className="box-tit">WordPress Solutions</h3>
          <p className="box-descrip">
            Developing custom WordPress websites, eCommerce platforms, and plugin integrations tailored
            to business needs.
          </p>
        </div>

        <div className="box">
          <FaLaptopCode className="iconbox" />
          <h3 className="box-tit">Full-Stack Development</h3>
          <p className="box-descrip">
            Building complete web solutions by combining frontend interfaces with backend logic for
            scalable, high-performance applications.
          </p>
        </div>

        <div className="box">
          <FaRocket className="iconbox" />
          <h3 className="box-tit">Frontend & UI Development</h3>
          <p className="box-descrip">
            Creating modern, responsive interfaces with React, focusing on usability, performance, and
            clean design.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
