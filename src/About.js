import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-us">
        <h1>
          About Health Tracker<span>+</span>
        </h1>
      </div>
      <section className="how-it-works">
        <div className="how-it-wokrs-img"></div>
        <div className="how-it-works-text">
          <h2>How Health Tracker Plus Works</h2>
          <div className="line"></div>
          <p>
            Health Tracker Plus helps you monitor and improve your well-being by
            providing tools to set health goals, track your progress, and stay
            motivated. Explore a wide range of exercises with step-by-step
            guides to help you perform them correctly. The dashboard allows you
            to input your data and easily track your progress over time.
          </p>
        </div>
      </section>

      <section className="our-team">
        <h2>Meet Our Team</h2>
        <div className="line"></div>
        <div className="team-members">
          <div className="team-member">
            <div className="team-image">
              <img src=".././images/about.jpg" alt="" />
            </div>
            <h3>John Doe</h3>
            <p>Co-founder & Fitness Expert</p>
            <div className="team-social-media-links">
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
            </div>
          </div>
          <div className="team-member">
            <div className="team-image">
              <img src="" alt="" />
            </div>
            <h3>Jane Smith</h3>
            <p>Co-founder & Nutrition Specialist</p>
            <div className="team-social-media-links">
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
            </div>
          </div>
          <div className="team-member">
            <div className="team-image">
              <img src="" alt="" />
            </div>
            <h3>Michael Johnson</h3>
            <p>Lead Developer</p>
            <div className="team-social-media-links">
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
            </div>
          </div>
          <div className="team-member">
            <div className="team-image">
              <img src="" alt="" />
            </div>
            <h3>Emily White</h3>
            <p>UX/UI Designer</p>
            <div className="team-social-media-links">
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
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="line"></div>
        <div className="testimonial-container">
          <div className="testimonial">
            <p>
              "Health Tracker Plus has transformed my fitness journey. The
              exercise library is extensive, and the dashboard makes it easy to
              track my progress. Highly recommended!"
            </p>
            <p className="user-info">
              - Alex Brown, <span>Fitness Enthusiast</span>
            </p>
          </div>
          <div className="testimonial">
            <p>
              "As a nutritionist, I appreciate the comprehensive features of
              Health Tracker Plus. It's an invaluable tool for both
              professionals and individuals seeking to improve their health."
            </p>
            <p className="user-info">
              - Sarah Miller, <span>Nutritionist</span>
            </p>
          </div>
          <div className="testimonial">
            <p>
              "The team behind Health Tracker Plus is exceptional. Their
              expertise is evident in the app's design and functionality. Kudos
              to the team!"
            </p>
            <p className="user-info">
              - David Turner, <span>Fitness Blogger</span>
            </p>
          </div>
          {/* <div className="testimonial">
            <p>
              "I've tried various health apps, but Health Tracker Plus stands
              out with its user-friendly interface and helpful features. A
              must-have for anyone on a fitness journey."
            </p>
            <p className="user-info">- Jessica Lee, Health Enthusiast</p>
          </div> */}
        </div>
      </section>
      <section className="footer">
        <p>James Kofi Myers &copy; 2023</p>
      </section>
    </div>
  );
};

export default About;
