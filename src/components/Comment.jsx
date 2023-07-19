// Comment.jsx
import React, { useState, useEffect } from "react";
import { Parser } from "html-to-react";
import { getStory } from "../utils/apis";
import DateTime from "./DateTime";

const Comment = ({ id, level = 0 }) => {
  const [comment, setComment] = useState(null);
  const [showReplies, setShowReplies] = useState(false);
  const [isLoadingReplies, setIsLoadingReplies] = useState(false);

  useEffect(() => {
    getStory(id)
      .then((comment) => setComment({ ...comment, level }))
      .catch(console.error);
  }, [id, level]);

  const handleShowReplies = () => {
    if (showReplies) {
      setShowReplies(false);
    } else {
      setIsLoadingReplies(true);
      Promise.all((comment.kids || []).map(getStory))
        .then((replies) => {
          setComment({
            ...comment,
            replies: replies.map((reply) => ({ ...reply, level: level + 1 })),
          });
          setShowReplies(true);
          setIsLoadingReplies(false);
        })
        .catch(console.error);
    }
  };

  if (!comment) {
    return null;
  }

  return (
    <>
      <div style={{ marginLeft: `${comment.level * 20}px` }}>
        <div className="relative grid grid-cols-1 gap-4 m-6 p-6 rounded-lg shadow-md">
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between">
              <p>
                <a
                  className="text-xl text-white"
                  href={`https://news.ycombinator.com/user?id=${comment.by}`}
                  target="_blank"
                >
                  {comment.by}
                </a>
                <span className="text-xs ml-2">
                  <DateTime timestamp={comment.time} />
                </span>
              </p>
            </div>
          </div>
          <p className="-mt-4 text-gray-300">{Parser().parse(comment.text)}</p>
          {comment.kids && (
            <button
              className="btn btn-ghost border border-current shadow-lg"
              onClick={handleShowReplies}
            >
              {isLoadingReplies
                ? "Loading replies..."
                : showReplies
                ? "Hide replies"
                : `Show replies`}
            </button>
          )}
          {showReplies &&
            comment.replies.map((reply) => (
              <Comment key={reply.id} id={reply.id} level={reply.level} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Comment;
