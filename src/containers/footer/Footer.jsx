import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="__footer section__padding">
    <div className="__footer-heading">
      <h1 className="gradient__text">Do you want to find your future </h1>
    </div>
    <div className="__footer-links">
      <div className="__footer-links_logo">
        <p>
          <b>Conseils</b> <br /> All Rights Reserved
        </p>
      </div>
      <div className="__footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
        <Link to="/volunteers">
          <p>Volunteers</p>
        </Link>
      </div>
      <div className="__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="__footer-links_div">
        <h4>Get in touch</h4>
        <p>Lehindu</p>
        <p>000-000-000-000</p>
        <p>lehinduatapattu@gmail.com</p>
      </div>
    </div>
  </div>
);

export default Footer;
