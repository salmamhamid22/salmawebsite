import React from "react";
import { FaEnvelope } from "react-icons/fa";
import "../assets/styles/Contact.scss";

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          

          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a href="mailto:salmamhamid42@gmail.com">salmamhamid42@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
