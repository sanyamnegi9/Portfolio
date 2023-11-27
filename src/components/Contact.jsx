import React from "react";
import "../styles/Contact.scss";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div id="contact">
      <h2>Contact</h2>
      <p className="desc">
        Please fill out the form below to discuss any work opportunities.
      </p>
      <form className="contact-form">
        <input
          type="text"
          className="name contact-input"
          placeholder="Your Name"
        />
        <input
          type="email"
          className="email contact-input"
          placeholder="Your Email"
        />
        <textarea
          name="message"
          className="msg contact-input"
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <button className="white-btn submit-btn" type="submit" value="Send">
          Submit
        </button>
        <div className="links">
          <FontAwesomeIcon icon={faGithub} size="xl"  className="link"/>
          <FontAwesomeIcon icon={faLinkedin} size="xl" className="link"/>
        </div>
      </form>
    </div>
  );
};

export default Contact;
