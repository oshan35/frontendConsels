import React from "react";
import "./possibility.css";
import Quize from "../../components/quize/Quiz";


const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-content">
      <h4>Are you ready to next step ?</h4>
      <h1 className="gradient__text">
        Get start the quiz <br /> find who you are
      </h1>
      <Quize />
      <p>
        Take our Personality Test and get a “freakishly accurate” description of
        who you are and why you do things the way you do.
      </p>
    </div>
  </div>
);

export default Possibility;
