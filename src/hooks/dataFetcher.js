import { useState, useEffect } from "react";
import { getStories } from "../utils/apis";

const useDataFetcher = (type, storyCount) => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getStories(type, storyCount)
      .then((stories) => {
        setStories(stories);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [type, storyCount]);

  return { isLoading, stories };
};

export default useDataFetcher;
