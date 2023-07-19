import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import DateTime from "./DateTime";

const Story = ({ story }) => {
  const { id, by, title, descendants, kids, time, url } = story;
  const navigate = useNavigate();

  const showComments = useCallback(() => {
    navigate(`/hacker-news/${id}/comments`, { state: { story } });
  }, [navigate, id, story]);

  return (
    <div className="story">
      <div className="story-title">
        <a href={url}>{title}</a>
      </div>
      <div className="story-info">
        <span>
          by <a href={`https://news.ycombinator.com/user?id=${by}`}>{by}</a>
        </span>
        |{" "}
        <span>
          <DateTime timestamp={time} />
        </span>{" "}
        |
        {descendants > 0 ? (
          <>
            <span>
              <a href={`https://news.ycombinator.com/item?id=${id}`}>
                {`${descendants} comments`}
              </a>
            </span>
            |{" "}
            <span>
              <button onClick={showComments}>Show Comments</button>
            </span>
          </>
        ) : (
          <span>No comments.</span>
        )}
      </div>
    </div>
  );
};

Story.propTypes = {
  story: PropTypes.shape({
    id: PropTypes.number,
    by: PropTypes.string,
    title: PropTypes.string,
    descendants: PropTypes.number,
    kids: PropTypes.array,
    time: PropTypes.number,
    url: PropTypes.string,
  }).isRequired,
};

export default Story;
