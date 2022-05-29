import React from "react";
import mic from "../../assets/mic.jpg";

const Podcast = () => {
  return (
    <div className="bg-[#F6F6F6]">
      <div className="grid grid-cols-2">
        <img src={mic} alt=""  className="h-full w-30 object-cover px-5 mt-5"/>
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
