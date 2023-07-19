// Comment.jsx
import React, { useState, useEffect } from "react";
import { Parser } from "html-to-react";
import { getStory } from "../utils/apis";

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
    <div style={{ marginLeft: `${comment.level * 20}px` }}>
      <div>{Parser().parse(comment.text)}</div>
      {comment.kids && (
        <button onClick={handleShowReplies}>
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
  );
};

export default Comment;
