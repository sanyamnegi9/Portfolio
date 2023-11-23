import React from "react";
import "../styles/Contact.scss";
import FacebookIcon from "../assets/facebook-icon.png";
import InstaIcon from "../assets/instagram.png";
import TwitterIcon from "../assets/twitter.png";
import YoutubeIcon from "../assets/youtube.png";

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
          <img src={FacebookIcon} alt="SocialLinks" className="link" />
          <img src={TwitterIcon} alt="SocialLinks" className="link" />
          <img src={InstaIcon} alt="SocialLinks" className="link" />
          <img src={YoutubeIcon} alt="SocialLinks" className="link" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
