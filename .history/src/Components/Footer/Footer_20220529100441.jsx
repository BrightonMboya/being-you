import React from "react";
import logo2 from '../../assets/logo2.png'
import {FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'

const Footer = () => {
    const year = new Date().getFullYear();
  return <div className="bg-[#C87073] flex justify-between items-center">
      <div>
          <img src={logo2} alt="" className="h-full w-40" />
      </div>

      <div>
        <h2 className="text-sm">{year} Being You. All right reserved</h2>
      </div>

      <div className="flex gap-3">
          <FaInstagram/>
          <FaTwitter/>
          <FaYoutube/>
      </div>
  </div>;
};

export default Footer;
