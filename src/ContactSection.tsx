import "./ContactSection.css";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from "react-icons/fa";

const formspreeEndpoint =
  import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/mqewpwyl";

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        <p className="sub-box">Get in touch</p>
        <h1 className="title-box">Contact Us</h1>

        <div className="contact-grid">
          <aside className="contact-info-card">
            <h3>Contact Information</h3>
            <p>
              Questions or project ideas? Send me a message and I will get back
              to you quickly.
            </p>

            <ul className="contact-info-list">
              <li>
                <span className="contact-info-icon">
                  <FaPhoneAlt />
                </span>
                <div>
                  <strong>Phone Number</strong>
                  <span>+961 78 979 310</span>
                </div>
              </li>

              <li>
                <span className="contact-info-icon">
                  <FaEnvelope />
                </span>
                <div>
                  <strong>Email Address</strong>
                  <span>sumayaminawi@gmail.com</span>
                </div>
              </li>

              <li>
                <span className="contact-info-icon">
                  <FaRegClock />
                </span>
                <div>
                  <strong>Opening Hour</strong>
                  <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </li>

              <li>
                <span className="contact-info-icon">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <strong>Location</strong>
                  <span>Beirut, Lebanon</span>
                </div>
              </li>
            </ul>
          </aside>

          <div className="contact-form-card">
            <h2>Get In Touch</h2>
            <p>
              Fill out the form below and your message will be sent directly to
              my email using Formspree.
            </p>

            <form
              className="contact-form"
              action={formspreeEndpoint}
              method="POST"
            >
              <input type="hidden" name="_subject" value="New Portfolio Contact Message" />

              <div className="contact-form-row">
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email Address" required />
              </div>

              <div className="contact-form-row">
                <input type="tel" name="phone" placeholder="Phone Number" />
                <input type="text" name="service" placeholder="Service You Interested" />
              </div>

              <textarea name="message" placeholder="Message" rows={6} required />

              <button type="submit" className="contact-submit-btn">
                Send Message
              </button>
            </form>

            <p className="formspree-note">
              Set <code>VITE_FORMSPREE_ENDPOINT</code> in your Vercel project
              settings to your Formspree URL.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
