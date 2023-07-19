import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import DateTime from "./DateTime";

const Story = ({ story }) => {
  const { id, by, title, descendants, kids, time, url } = story;
  const navigate = useNavigate();

  const showComments = useCallback(() => {
    navigate(`/news/${id}/comments`, { state: { story } });
  }, [navigate, id, story]);

  return (
    <article className="border-t border-gray-200 p-6 text-bas dark:bg-gray-900">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          by &nbsp;
          <p className="inline-flex items-center mr-3  text-gray-900 dark:text-white">
            <a
              href={`https://news.ycombinator.com/user?id=${by}`}
              target="_blank"
            >
              {by}
            </a>
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            <DateTime timestamp={time} />
          </p>
        </div>
      </div>
      <p className="text-gray-500 dark:text-white">
        <a href={url}>{title}</a>
      </p>
      <div className="flex items-center mt-2 space-x-4">
        {descendants > 0 ? (
          <>
            <span>
              <a
                href={`https://news.ycombinator.com/item?id=${id}`}
                target="_blank"
              >
                {`${descendants} comments`}
              </a>
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;|
            <button
              type="button"
              className="flex items-center text-sm text-gray-500 hover:underline dark:text-white"
              onClick={showComments}
            >
              <svg
                aria-hidden="true"
                className="mr-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              Show Comments
            </button>
          </>
        ) : (
          <span>No comments.</span>
        )}
      </div>
    </article>
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
