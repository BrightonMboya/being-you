import React from "react";
import about from "../../assets/about.jpg";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#F6F6F6]">
      <div className="py-6 md:grid grid-cols-3 gap-3">
        <div className="mt-6">
          <h3 className="text-center font-semibold">About</h3>
          <p className="text-center px-4 md:mt-3">
            "The Value of identity of course is that so often with it comes
            purpose.
          </p>
        </div>
        <img src={about} alt="" className="mt-6 px-[25vw] h-60" />
        <p className="text-center px-3 text-sm mt-7 md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae vel sint commodi repudiand consequuntur voluptatum 
            <br/>
          blanditiis harum quisquam eius sed odit fugiat iusto fuga praesenti
          optio, eaque rerum! Provident similique accusanti nemo autem.
        </p>
      </div>
    </div>
  );
};

export default About;
