import React from "react";
import logo2 from '../../assets/logo2.png'
import {FaInstagram}

const Footer = () => {
    const year = new Date().getFullYear();
  return <div className="bg-[#C87073]">
      <div>
          <img src={logo2} alt="" />
      </div>

      <div>
        <h2>{year} Being You. All right reserved</h2>
      </div>

      <div></div>
  </div>;
};

export default Footer;
