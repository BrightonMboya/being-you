import React from "react";

const ExploreCard = (props) => {
  return (
    <div className="mt-6">
      <div className="flex flex-col items-center shadow-md">
        <img src={props.image} alt="" />
        <h3>{props.title}</h3>
        <p>{props.description}</p>

        <button>{props.action}</button>
      </div>
    </div>
  );
};

export default ExploreCard;
