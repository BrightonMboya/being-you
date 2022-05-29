import React from "react";

const ExploreCard = (props) => {
  return (
    <div className="mt-8">
      <div className="flex flex-col items-center shadow-md h-[25vh]">
        <img src={props.image} alt="" />
        <h3 className="mt-5 font-semibold text-lg">{props.title}</h3>
        <p className="ml-5">{props.description}</p>

        <button className="mt-7 bg-[#">{props.action}</button>
      </div>
    </div>
  );
};

export default ExploreCard;
