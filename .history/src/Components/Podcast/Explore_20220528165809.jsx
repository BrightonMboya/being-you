import React from "react";
import ExploreCard from "./ExploreCard";
import book from "../../assets/book.svg";
import podcast from "../../assets/podcast.svg";
import resources from "../../assets/resources.svg";

const Explore = () => {
  return (
    <div className="mt-5">
      <h3 className="text-center">Explore</h3>
      <div className="flex flex-col px-8 ml-10">
        <ExploreCard
          image={book}
          title="Books"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae "
          action="Read On"
        />
        <ExploreCard
          image={podcast}
          title="Podcast"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae "
          action="Tune In"
        />
        <ExploreCard
          image={resources}
          title="Resources"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae "
          action="Explore"
        />

      </div>
    </div>
  );
};

export default Explore;
