import React from "react";
import "../styles/Footer.css";
import { GrInstagram, GrFacebook } from "react-icons/gr";

function Footer() {
  return (
    <div className="footer">
      <p>Follow</p>
      <a href="https://www.instagram.com/luca.petrescu/">
        <GrInstagram className="icon-instagram" size={70} />
      </a>
      <a href="https://www.facebook.com/petrescu.luca">
        <GrFacebook className="icon-facebook" size={70} />
      </a>
    </div>
  );
}

export default Footer;
