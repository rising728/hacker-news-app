import React from "react";
import Story from "../components/Story";
import useDataFetcher from "../hooks/dataFetcher";
import Loader from "../components/Loader";
import Error from "../components/Error";

const NewsTitle = {
  top: "Top Stories",
  new: "New Stories",
  best: "Best Stories",
};

const renderStory = (story, index) => {
  if (!story) {
    return <Error message={`Story at index ${index} is undefined`} />;
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

  return (
    <>
      <h1 className="text-2xl text-bold p-6">{NewsTitle[type]}</h1>
      <React.Fragment>{stories.map(renderStory)}</React.Fragment>
    </>
  );
};

export default Stories;
