import "./Body.css";
import AboutSection from "./AboutSection";
import FeaturesSection from "./FeaturesSection";
import HeroSection from "./HeroSection";
import PortfolioSection from "./PortfolioSection";
import SkillsSection from "./SkillsSection";

function Body() {
  return (
    <>
      <HeroSection />
      <div className="full-line"></div>

      <FeaturesSection />
      <div className="full-line"></div>

      <PortfolioSection />
      <div className="full-line"></div>

      <AboutSection />
      <div className="full-line"></div>

      <SkillsSection />
      <div className="full-line"></div>
    </>
  );
}

export default Body;
