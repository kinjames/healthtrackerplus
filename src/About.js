import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-us">
        <h1>About Health Tracker+</h1>
      </div>
      <section className="how-it-works">
        <h2>How Health Tracker Plus Works</h2>
        <p>
          Health Tracker Plus helps you monitor and improve your well-being by
          providing tools to set health goals, track your progress, and stay
          motivated. With our user-friendly interface and comprehensive
          features, you can easily keep an eye on your exercise routines,
          nutrition, and overall health.
        </p>
      </section>

      <section className="our-team">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <img src="team-member-1.jpg" alt="Team Member 1" />
          <h3>John Doe</h3>
          <p>Co-founder & Fitness Expert</p>
        </div>
        <div className="team-member">
          <img src="team-member-2.jpg" alt="Team Member 2" />
          <h3>Jane Smith</h3>
          <p>Co-founder & Nutrition Specialist</p>
        </div>
        {/* Add more team members as needed */}
      </section>
    </div>
  );
};

export default About;
