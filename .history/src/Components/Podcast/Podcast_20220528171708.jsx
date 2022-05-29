import React from "react";
import mic from "../../assets/mic.jpg";

const Podcast = () => {
  return (
    <div className="bg-[#F6F6F6]">
      <div className="flex flex-col">
        <img src={mic} alt="" />
        <div>
          <h3>Latest Podcast</h3>
          <p>
            Numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga
            praesentium
          </p>

          <button>Listen Now</button>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
