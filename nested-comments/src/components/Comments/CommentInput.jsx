import { useState } from "react";

function CommentInput(props) {
  const {
    commentInputData,
    setCommentInputData,
    handleAddCommentClick,
    cancelCommentClick,
  } = props;
  return (
    <>
      <textarea
        name="commentBox"
        id="comment-box"
        value={commentInputData.content}
        onChange={(e) =>
          setCommentInputData({ ...commentInputData, content: e.target.value })
        }
        autoFocus
      ></textarea>
      <div className="comentinput-actions-container">
        <button
          className="commentinput-button addcomment-button"
          onClick={handleAddCommentClick}
        >
          Add Comment
        </button>
        <button
          className="commentinput-button cancelcomment-button"
          onClick={cancelCommentClick}
        >
          Cancel
        </button>
      </div>
    </>
  );
}

export default CommentInput;
