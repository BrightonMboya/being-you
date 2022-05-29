import React from "react";
import mic from "../../assets/mic.jpg";

const Podcast = () => {
  return (
    <div className="bg-[#F6F6F6] mt-8 h-[37vh]">
      <div className="grid grid-cols-2 gap-5">
        <img
          src={mic}
          alt=""
          className="h-40 w-15 object-cover  mt-[10vh] border-4 border-white md:h-75 mt-12 ml-12"
        />
        <div className="mt-[7vh] ml-7">
          <h3 className="font-semibold md:text-lg">Latest Podcast</h3>
          <p className="text-sm mr-5 mt-5 md:text-base">
            Numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga
            praesentium
          </p>

          <button className="mt-7 bg-black text-white px-4 py-2 rounded-sm shadow-mdF">
            Listen Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
