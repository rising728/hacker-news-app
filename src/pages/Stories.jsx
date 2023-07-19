import React from "react";
import Story from "../components/Story";
import useDataFetcher from "../hooks/dataFetcher";
import Loader from "../components/Loader";

const renderStory = (story, index) => {
  if (!story) {
    console.log(`Story at index ${index} is undefined`);
    return null;
  }

  return <Story key={story.id} story={story} />;
};

const Stories = ({ type }) => {
  const { isLoading, stories } = useDataFetcher(type ? type : "top", 20);

  if (isLoading) {
    return <Loader show={isLoading} />;
  }

  if (!stories.length) {
    return <p>No stories found. Please try again later.</p>;
  }

  return <React.Fragment>{stories.map(renderStory)}</React.Fragment>;
};

export default Stories;
