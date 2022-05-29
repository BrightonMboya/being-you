import React from "react";
import logo2 from '../../assets/logo2.png'
import {FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'

const Footer = () => {
    const year = new Date().getFullYear();
  return <div className="bg-[#C87073] flex justify-between">
      <div>
          <img src={logo2} alt="" />
      </div>

      <div>
        <h2>{year} Being You. All right reserved</h2>
      </div>

      <div className="flex">
          <FaInstagram/>
          <FaTwitter/>
          <FaYoutube/>
      </div>
  </div>;
};

export default Footer;
