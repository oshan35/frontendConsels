import React from "react";
import "./features.css";
import { Possibility } from "..";


const Features = () => (
  <div className="__features section__padding" id="features">
    <div className="__features-heading">
      <h1 className="gradient__text">Personality Type Theories</h1>
      <p>
        Over the years, you may have heard of several personality theories and
        tests. What they all share is that they are all trying to understand
        what motivates,controls and manages these individuals.In short, the
        better the idea we form of different personalities, the better we
        understand ourselves. Whilst cited psychologists in the introduction
        have given us insight into the different personality types there is a
        long history that underpins the most recent classifications, especially
        when it comes to MBTI personality type.
      </p>
    </div>
    <div className="__features-container">
      <Possibility />
    </div>
  </div>
);

export default Features;
