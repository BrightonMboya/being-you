import React from "react";
import ExploreCard from "./ExploreCard";
import book from "../../assets/book.svg";
import podcast from "../../assets/podcast.svg";
import resources from "../../assets/resources.svg";

const Explore = () => {
  return (
    <div>
      <h3 className="ml-10">Explore</h3>
      <div className="flex flex-col px-8 ml-10">
        <ExploreCard
          img={book}
          title="Books"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae "
          action="Read On"
        />
        <ExploreCard
          img={podcast}
          title="Podcast"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae "
          action="Tune In"
        />
        <ExploreCard
          img={resources}
          title="Resources"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae "
          action="Explore"
        />

      </div>
    </div>
  );
};

export default Explore;
