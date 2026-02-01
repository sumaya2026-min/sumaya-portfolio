import sumaya from "./assets/sumaya.jpeg";
import loig from "./assets/loig.png";
import ufind from "./assets/ufind.png";
import beautify from "./assets/beautify.png";
import etc from "./assets/etc.png";
import xenaperfume from "./assets/xenaperfume.png";
import vetline from "./assets/vetline.png";

import "./Body.css";
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";






function Body() {
    return (<>


        <section className="hero">
            <div className="heroSection" id="home">
                <div className="heroText">
                    <p className="subtitle">Welcome to my world</p>
                    <h1 className="title">Hi, I’m Sumaya Alminawi <br></br><span style={{ color: "#c6a1f4" }}>a Developer</span></h1>
                    <p className="descrip">I use development as a structured
                        problem-solving tool to simplify digital experiences<br></br> and
                        guide users through every interaction. I don’t build features just to
                        add complexity,<br></br> but implement technologies with purpose—ensuring performance,
                        clarity, and scalability.<br></br> My approach combines clean code, thoughtful architecture,
                        and user-focused logic to <br></br>deliver
                        solutions that are both functional and intuitive.</p>
                </div>
                <div className="heroImage">
                    <img className="devimg" src={sumaya} alt="img-dev" />
                </div>
            </div>
            <p className="socialtitle">find with me</p>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
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
        <div className="full-line"></div>

        <div className="feature" id="feature">
            <p className="sub-box">Features</p>
            <h1 className="title-box">What I Do</h1>
            <div className="boxes">
                <div className="box">
                    <FaWordpress className="iconbox" />
                    <h3 className="box-tit">WordPress Solutions</h3>
                    <p className="box-descrip">Developing custom WordPress websites, eCommerce platforms,
                        and plugin integrations tailored to business needs.</p> </div>

                <div className="box">
                    <FaLaptopCode className="iconbox" />
                    <h3 className="box-tit">Full-Stack Development</h3>
                    <p className="box-descrip">Building complete web solutions by combining frontend interfaces with backend logic for scalable,
                        high-performance applications.</p> </div>

                <div className="box">
                    <FaRocket className="iconbox" />
                    <h3 className="box-tit">Frontend & UI Development</h3>
                    <p className="box-descrip">Creating modern, responsive interfaces with React, focusing on usability,
                        performance, and clean design.</p> </div>
            </div>
        </div>
        <div className="full-line"></div>
        <div className="portfolios">
            <p className="sub-box">Visit my portfolio and keep your feedback</p>
            <h1 className="title-box">My Portfolio</h1>
            <div className="potfolio">
                <div className="portf">
                    <img className="portfolio-img" src={loig} alt="img-dev" />
                    <h3 className="portfolio-tit">Informative Website</h3>
                    <a href="https://loig.org"   // change to your link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="box-link" >
                        <p className="box-descrip">
                            The Lebanese Oncology Interest Group (LOIG)
                            <span className="arrow">
                                <MdArrowOutward />
                            </span>
                        </p>
                    </a></div>


                <div className="portf" id="portfolio">
                    <img className="portfolio-img" src={ufind} alt="img-dev" />
                    <h3 className="portfolio-tit">Services</h3>
                    <a href="https://u-find.shop/"   // change to your link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="box-link" >
                        <p className="box-descrip">
                            At UFind, our mission is to bridge the gap between buyers and online businesses
                            <span className="arrow">
                                <MdArrowOutward />
                            </span>
                        </p>
                    </a></div>
                <div className="portf">
                    <img className="portfolio-img" src={beautify} alt="img-dev" />
                    <h3 className="portfolio-tit">Ecommerce Website</h3>
                    <a href="https://beautifylb.com/"   // change to your link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="box-link" >
                        <p className="box-descrip">
                            At Beautify, we believe beauty should be effortless, hygienic, and inspiring.
                            <span className="arrow">
                                <MdArrowOutward />
                            </span>
                        </p>
                    </a></div>
            </div>
            <div className="potfolio">
                <div className="portf">
                    <img className="portfolio-img" src={etc} alt="img-dev" />
                    <h3 className="portfolio-tit">Ecommerce Website</h3>
                    <a href="https://etcenter.co/"   // change to your link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="box-link" >
                        <p className="box-descrip">
                            ETC was founded in October 2010, and we have accomplished so muchover the years.
                            <span className="arrow">
                                <MdArrowOutward />
                            </span>
                        </p>
                    </a></div>


                <div className="portf">
                    <img className="portfolio-img" src={vetline} alt="img-dev" />
                    <h3 className="portfolio-tit">Informative Website</h3>
                    <a href="https://vetlinelb.com/"   // change to your link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="box-link" >
                        <p className="box-descrip">
                            With over 30 years of expertise, Vetline SARL is a leading Lebanese company specializing in pet medicine, products, and accessories.
                            <span className="arrow">
                                <MdArrowOutward />
                            </span>
                        </p>
                    </a></div>
                <div className="portf">
                    <img className="portfolio-img" src={xenaperfume} alt="img-dev" />
                    <h3 className="portfolio-tit">Ecommerce Website</h3>
                    <a href="https://xenaperfume.com/?v=fa342bca698b"   // change to your link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="box-link" >
                        <p className="box-descrip">
                            Discover the Art of Luxury Fragrance Enter the world of XENA Perfume                            <span className="arrow">
                                <MdArrowOutward />
                            </span>
                        </p>
                    </a></div>
            </div>

        </div>

        <div className="full-line"></div>
        <section className="hero">
            <div className="heroSection" id="aboutme">
                <div className="heroImage">
                    <img className="devimg" src={sumaya} alt="img-dev" />
                </div>
                <div className="abouttext">

                    <h1 className="title">About <span style={{ color: "#c6a1f4" }}>Me</span></h1>
                    <p className="descrip">I am a WordPress and Full-Stack Developer with hands-on experience in building and managing professional websites and eCommerce platforms. I specialize in WordPress customization, plugin integration, hosting management, and frontend development using React, with a strong focus on performance,
                        usability, and clean design.</p>
                    <div className="skills-box">
                        <h3>My Skills</h3>

                        <div className="skill">
                            <span>HTML</span>
                            <div className="bar">
                                <div className="progress html"></div>
                            </div>
                        </div>

                        <div className="skill">
                            <span>CSS</span>
                            <div className="bar">
                                <div className="progress css"></div>
                            </div>
                        </div>

                        <div className="skill">
                            <span>JavaScript</span>
                            <div className="bar">
                                <div className="progress js"></div>
                            </div>
                        </div>

                        <div className="skill">
                            <span>React</span>
                            <div className="bar">
                                <div className="progress react"></div>
                            </div>
                        </div>
                        <div className="skill">
                            <span>Wordpress</span>
                            <div className="bar">
                                <div className="progress wordpress"></div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>
        <div className="full-line"></div>


    </>

    )
}
export default Body