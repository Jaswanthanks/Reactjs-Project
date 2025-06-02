import React from "react";
import "./About.css";

import aboutimage from "../../assets//about.png";
import playicon from "../../assets//play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={aboutimage} alt="" className="about-img" />
      <img src={playicon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tommorow's Leaders Today</h2>
        <p>
          Embark on a transformativ educational journey with our university's
          comprehensive educational programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experience needed to excel in the dynamic feild of education.
        </p>
        <p>
          With focus and innovation, Hnads-on learning, and personalised
          mentorship, our program prepare aspiring educators to make a
          meaningfull impact in classroom, schools, and communities.
        </p>
      </div>
    </div>
  );
};

export default About;
