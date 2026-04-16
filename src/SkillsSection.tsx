import "./SkillsSection.css";

const programmingSkills = [
  { name: "HTML / CSS", level: 92 },
  { name: "JavaScript", level: 88 },
  { name: "TypeScript", level: 84 },
  { name: "React", level: 90 },
  { name: "Next.js", level: 82 },
  { name: "WordPress", level: 91 },
];

const frameworkSkills = [
  { name: "Node.js / Express", level: 82 },
  { name: "NestJS", level: 74 },
  { name: "Python", level: 80 },
  { name: "FastAPI / Django", level: 78 },
  { name: "MySQL / MongoDB", level: 79 },
  { name: "Shopify", level: 76 },
];

const skillChips = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "NestJS",
  "Python",
  "FastAPI",
  "Django",
  "MySQL",
  "MongoDB",
  "Git",
  "GitHub",
  "Postman",
  "REST APIs",
  "JWT",
  "RBAC",
  "Agile",
  "WordPress",
  "Shopify",
];

function SkillsSection() {
  return (
    <section className="skills-section">
      <div className="skills-wrapper">
        <p className="sub-box">Technical Stack</p>
        <h1 className="title-box">Skills & Technologies</h1>

        <div className="skills-panels">
          <div className="skills-panel skills-panel-dark">
            <h3>Programming</h3>
            <div className="skills-list">
              {programmingSkills.map((skill) => (
                <div className="skill-row" key={skill.name}>
                  <div className="skill-row-top">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-track">
                    <div className="skill-fill" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-panel skills-panel-light">
            <h3>Frameworks / Tools</h3>
            <div className="skills-list">
              {frameworkSkills.map((skill) => (
                <div className="skill-row" key={skill.name}>
                  <div className="skill-row-top">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-track">
                    <div className="skill-fill" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-chip-cloud">
          {skillChips.map((skill) => (
            <span className="skills-chip" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
