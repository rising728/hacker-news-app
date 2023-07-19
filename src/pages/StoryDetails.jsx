import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Comment from "../components/Comment";
import { getStory } from "../utils/apis";
import Story from "../components/Story";
import Loader from "../components/Loader";
import Error from "../components/Error";

const StoryDetails = () => {
  const location = useLocation();
  const story = location.state.story;
  const [comments, setComments] = useState([]);
  const [isLoadingThread, setIsLoadingThread] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (story && story.kids) {
      setIsLoadingThread(true);
      Promise.all(story.kids.map(getStory))
        .then(setComments)
        .catch(setError)
        .finally(() => {
          setIsLoadingThread(false);
        });
    } else {
      setIsLoadingThread(false);
    }
  }, [story]);

  if (isLoadingThread) {
    return <Loader show={isLoadingThread} message="Loading thread..." />;
  }

  if (error) {
    return <Error message={`Error loading thread: ${error}`} />;
  }

  return (
    <div className="story">
      <Story story={story} commentBtn={false} />

      <div className="comments">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Comment key={comment.id} id={comment.id} />
          ))
        ) : (
          <div>No comments.</div>
        )}
      </div>
    </div>
  );
};

export default StoryDetails;
