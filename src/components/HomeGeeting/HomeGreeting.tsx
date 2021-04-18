import React from "react";
import CodingLangList from "./CodingLangList";
import profilePic from "../../assets/images/profile-pic.png";

const HomeGreeting = () => {
  return (
    <div className="home-greeting-container">
      <div className="home-greeting">
        <div className="profile-image">
          <img src={profilePic} />
        </div>
        <div className="name">Kevin Terry</div>
        <div className="description">terrykevin1@gmail.com</div>
        <div className="description">678-656-9875</div>
        <div className="greeting">
          I'm a front end engineer who enjoys finding solutions to problems
          through code. After checking out my projects, Github, and Linkedin,
          throw me a quick message about what you think of my site!
        </div>
        <CodingLangList />
      </div>
    </div>
  );
};

export default HomeGreeting;
