import { useMemo, useState } from "react";
import "./PortfolioSection.css";
import loig from "./assets/loig.png";
import ufind from "./assets/ufind.png";
import beautify from "./assets/beautify.png";
import etc from "./assets/etc.png";
import xenaperfume from "./assets/xenaperfume.png";
import vetline from "./assets/vetline.png";
import lumiere from "./assets/Lumiere.webp";
import bus from "./assets/bus-tracking.webp";
import fastify from "./assets/fastify.png";



type ProjectCategory = "wordpress" | "web-development";
type PortfolioFilter = "all" | ProjectCategory;

const projects = [
  {
    name: "The Lebanese Oncology Interest Group (LOIG)",
    type: "Lebanese students advancing oncology education, research, and cancer awareness initiatives",
    category: "wordpress",
    image: loig,
    viewUrl: "https://loig.org",
    sourceUrl: "#",
    tech: ["WordPress", "Elementor", "CSS"],
  },
  {
    name: "lumiere Beirut",
    type: "Next.js event planning website with dashboard, CMS, and role-based access",
    category: "web-development",
    image: lumiere ,
    viewUrl: "#",
    sourceUrl: "https://github.com/sumaya2026-min/my-nextjs-eventplanning",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "UFind Services Platform",
    type: "Online platform connecting shoppers with local and international stores easily",
    category: "wordpress",
    image: ufind,
    viewUrl: "https://u-find.shop/",
    sourceUrl: "#",
    tech: ["WordPress", "Elementor", "css"],
  },
  {
    name: "Beautify eCommerce",
    type: "Beauty brand offering smart tools, accessories, and effortless daily routines",
    category: "wordpress",
    image: beautify,
    viewUrl: "https://beautifylb.com/",
    sourceUrl: "#",
    tech: ["WordPress", "WooCommerce", "SEO"],
  },
  {
    name: "Bus Tracker",
    type: "Coordinating bus pickups for training sessions can be stressful. Students often wait outside for long periods without knowing exactly where the driver is.",
    category: "web-development",
    image: bus,
    viewUrl: "#",
    sourceUrl: "https://github.com/asmaachreih1/bus_updated",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "Express"],
  },
  {
    name: "ETC Center",
    type: "Security company providing surveillance, alarms, smart homes, and protection systems",
    category: "wordpress",
    image: etc,
    viewUrl: "https://etcenter.co/",
    sourceUrl: "#",
    tech: ["WordPress", "WooCommerce", "UX"],
  },
  {
    name: "FastAPI Authentication System",
    type: "FastAPI authentication system with JWT, roles, MongoDB, and protected routes",
    category: "web-development",
    image: fastify,
    viewUrl: "#",
    sourceUrl: "https://github.com/sumaya2026-min/FastAPI-Mini-Project",
    tech: ["Python", "FastAPI", "MongoDB"],
  },
  {
    name: "Vetline SARL",
    type: "Leading Lebanese company providing veterinary products, pet care, and accessories",
    category: "wordpress",
    image: vetline,
    viewUrl: "https://vetlinelb.com/",
    sourceUrl: "#",
    tech: ["WordPress", "Elementor", "css"],
  },
  {
    name: "Xena Perfume",
    type: "Discover the Art of Luxury Fragrance Enter the world of XENA Perfumete",
    category: "wordpress",
    image: xenaperfume,
    viewUrl: "https://xenaperfume.com/?v=fa342bca698b",
    sourceUrl: "#",
    tech: ["WordPress", "WooCommerce"],
  },
] as const;

const portfolioFilters: { label: string; value: PortfolioFilter }[] = [
  { label: "All", value: "all" },
  { label: "WordPress", value: "wordpress" },
  { label: "Web Development", value: "web-development" },
];

function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<PortfolioFilter>("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="portfolios" id="portfolio">
      <p className="sub-box">Visit my portfolio and keep your feedback</p>
      <h1 className="title-box">My Portfolio</h1>

      <div className="portfolio-filters">
        {portfolioFilters.map((tab) => (
          <button
            type="button"
            key={tab.value}
            className={`portfolio-tab ${activeFilter === tab.value ? "active" : ""}`}
            onClick={() => setActiveFilter(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <article className="portf" key={project.name}>
            <div className="portfolio-media-wrap">
              <img className="portfolio-img" src={project.image} alt={project.name} />
            </div>

            <h3 className="project-name">{project.name}</h3>

            <div className="project-tech-list">
              {project.tech.map((techItem) => (
                <span className="project-tech-chip" key={`${project.name}-${techItem}`}>
                  {techItem}
                </span>
              ))}
            </div>

            <p className="portfolio-tit">{project.type}</p>

            <div className="project-actions">
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn project-btn-primary"
              >
                Source
              </a>
              <a
                href={project.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn project-btn-secondary"
              >
                View
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default PortfolioSection;
