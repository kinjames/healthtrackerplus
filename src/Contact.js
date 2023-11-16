import React, { useState } from "react";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (replace with actual server logic)
    console.log("Form submitted:", formData);
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact">
      <div className="contact-us">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-form-details">
        <div className="contact-details">
          <div className="contact-detail">
            <a
              href="https://www.facebook.com/healthtrackerplus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faPhone} />
            </a>
            <div className="details">
              <p className="title">Phone Number</p>
              <p className="number">+1 (123) 456-7890</p>
            </div>
          </div>
          <div className="contact-detail">
            <a
              href="https://www.facebook.com/healthtrackerplus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <div className="details">
              <p className="title">Email</p>
              <p className="number">contact@healthtrackerplus.com</p>
            </div>
          </div>
          <div className="social-media-links">
            <a
              href="https://www.facebook.com/healthtrackerplus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.twitter.com/healthtrackerplus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.instagram.com/healthtrackerplus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.instagram.com/healthtrackerplus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className="contact-form">
          <h2>Send us a message:</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div className="map">
        <h2>Find Us On Google Map</h2>
        <div className="line"></div>
        <div className="address">
          <p>123 Health Street, Fitness City</p>
          <p>Cityville, USA</p>
        </div>
        <iframe
          title="Walk-in Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-74.005972!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDUzJzA5LjAiTiA3NMKwMjYnMDIuNiJX!5e0!3m2!1sen!2sus!4v1588792554855!5m2!1sen!2sus"
          width="1140"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
        ></iframe>
      </div>
      <section className="footer">
        <p>James Kofi Myers &copy; 2023</p>
      </section>
    </div>
  );
};

export default Contact;
