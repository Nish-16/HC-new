import React from 'react';
import Navbar from '../../navbar/Navbar';
import './Contact.css';
import SiteFooter from '../../SiteFooter/SiteFooter';
import { FaPhone, FaEnvelope, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <br />
      <div className="contact-page">
        <div className="contact-container">
          {/* Left Section: Meet the Founders */}
          <div className="left-section">
            <div className="vertical-heading">
              Meet the Founders
            </div>
            <div className="founders-grid">
              <div className="founder-card" style={{ margin: "10px" }}>
                <div
                  className="founder-image-container"
                  style={{ overflow: "hidden", borderRadius: "8px" }}
                >
                  {/* Placeholder for Ansh Bajaj's Image */}
                  <div
                    style={{
                      width: "100%",
                      height: "150px",
                      backgroundColor: "#ddd",
                      borderRadius: "8px",
                    }}
                  ></div>
                </div>
                <div className="founder-info">
                  <p className="founder-title">Course Instructor</p>
                  <p className="founder-name">Ansh Bajaj</p>
                </div>
              </div>
              <div className="founder-card" style={{ margin: "10px" }}>
                <div
                  className="founder-image-container"
                  style={{ overflow: "hidden", borderRadius: "8px" }}
                >
                  {/* Placeholder for Ishank Goyal's Image */}
                  <div
                    style={{
                      width: "100%",
                      height: "150px",
                      backgroundColor: "#ddd",
                      borderRadius: "8px",
                    }}
                  ></div>
                </div>
                <div className="founder-info">
                  <p className="founder-title">Course Instructor</p>
                  <p className="founder-name">Ishank Goyal</p>
                </div>
              </div>
              <div className="founder-card" style={{ margin: "10px" }}>
                <div
                  className="founder-image-container"
                  style={{ overflow: "hidden", borderRadius: "8px" }}
                >
                  {/* Placeholder for Aaryan Kaushal's Image */}
                  <div
                    style={{
                      width: "100%",
                      height: "150px",
                      backgroundColor: "#ddd",
                      borderRadius: "8px",
                    }}
                  ></div>
                </div>
                <div className="founder-info">
                  <p className="founder-title">Course Coordinator</p>
                  <p className="founder-name">Aaryan Kaushal</p>
                </div>
              </div>
              <div className="founder-card" style={{ margin: "10px" }}>
                <div
                  className="founder-image-container"
                  style={{ overflow: "hidden", borderRadius: "8px" }}
                >
                  {/* Placeholder for Ritvik Singla's Image */}
                  <div
                    style={{
                      width: "100%",
                      height: "150px",
                      backgroundColor: "#ddd",
                      borderRadius: "8px",
                    }}
                  ></div>
                </div>
                <div className="founder-info">
                  <p className="founder-title">Course Coordinator</p>
                  <p className="founder-name">Ritvik Singla</p>
                </div>
              </div>
              <div className="founder-card" style={{ margin: "10px" }}>
                <div
                  className="founder-image-container"
                  style={{ overflow: "hidden", borderRadius: "8px" }}
                >
                  {/* Placeholder for Shreya Baranwal's Image */}
                  <div
                    style={{
                      width: "100%",
                      height: "150px",
                      backgroundColor: "#ddd",
                      borderRadius: "8px",
                    }}
                  ></div>
                </div>
                <div className="founder-info">
                  <p className="founder-title">Designer</p>
                  <p className="founder-name">Shreya Baranwal</p>
                </div>
              </div>
              <div className="founder-card" style={{ margin: "10px" }}>
                <div
                  className="founder-image-container"
                  style={{ overflow: "hidden", borderRadius: "8px" }}
                >
                  {/* Placeholder for Sharanya Goel's Image */}
                  <div
                    style={{
                      width: "100%",
                      height: "150px",
                      backgroundColor: "#ddd",
                      borderRadius: "8px",
                    }}
                  ></div>
                </div>
                <div className="founder-info">
                  <p className="founder-title">Content Writer</p>
                  <p className="founder-name">Sharanya Goel</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Contact Us */}
          <div className="right-section">
            <h2 className="heading">Contact Us</h2>
            <ul className="contact-info">
              <li className="contact-item">
                <FaPhone id="p1" style={{ transform: "scaleX(-1)" }} />
                Ansh Bajaj - 8685988991
              </li>
              <li className="contact-item">
                <FaPhone style={{ transform: "scaleX(-1)" }} />
                Ishank Goyal - 8708667212
              </li>
              <li className="contact-item">
                <FaPhone id="p2" style={{ transform: "scaleX(-1)" }} />
                Aaryan Kaushal - 9501951970
              </li>
            </ul>
            <div className="dotted-separator"></div>
            <ul className="contact-email">
              <FaEnvelope id="e1" style={{ transform: "scaleX(-1)" }} />
              <span>executives@humblecoders.in</span>
            </ul>
            <div className="contact-social-media">
              <a
                href="https://www.linkedin.com/company/humble-coders/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/humble_coders?igsh=MWU4dXAxNjBwaGI4aA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://chat.whatsapp.com/C89q4zjD4NK38ZE9TQgXss"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
};

export default Contact;

