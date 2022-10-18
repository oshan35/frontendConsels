import React from "react";
import people from "../../assets/people.png";
import img from "../../assets/heroImg.png";
import "./header.css";

const Header = () => (
  <div className="__header section__padding" id="home">
    <div className="__header-content">
      <h1 className="gradient__text">Take your Personality </h1>
      <h2 className="gradient__text">
        {" "}
        Test, discover your personality type, get suggestions for degree programmes and chat with an expert
      </h2>

      <p>
        Personality tests are a great way to explore different aspects of who
        you are, and uncover layers you perhaps hadn’t recognized about yourself
        before. Being truly self-aware is hard -- while they might not be always
        100% accurate, personality tests work well as a starting point for
        self-discovery by providing results you might not have concluded on your
        own.
      </p>

      <div className="__header-content__people">
        <img src={people} alt="people" />
        <a href="#quiz">
          <p>Scroll down to learn more about you ￬</p>
        </a>
      </div>
    </div>

    <div className="__header-image">
      <img src={img}  alt="img"/>
    </div>
  </div>
);

export default Header;
