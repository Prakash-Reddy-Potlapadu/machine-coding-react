import CommentInput from "./CommentInput";
import { useState } from "react";

function Comment(props) {
  let { comment, comments, setComments } = props;

  const [commentInputData, setCommentInputData] = useState({
    isVisible: false,
    content: "",
  });

  function handleReplyCommentClick(e, parentCommentID) {
    setCommentInputData({ ...commentInputData, isVisible: true });
  }

  function handleAddCommentClick() {
    if (!commentInputData.content) {
      return;
    }

    let parentCommentID = comment.ID;
    let commentObj = {
      ID: new Date().getTime(),
      comment: commentInputData.content,
      parentID: parentCommentID,
      children: [],
    };

    let commentsObj = { ...comments };
    // console.log("commentsObj,parentCommentID", commentsObj, parentCommentID);
    commentsObj[commentObj.ID] = commentObj;
    commentsObj[parentCommentID].children.push(commentObj.ID);
    setComments(commentsObj);
    setCommentInputData({ ...commentInputData, content: "", isVisible: false });
  }
  function cancelCommentClick() {
    setCommentInputData({ ...commentInputData, content: "", isVisible: false });
  }

  function handleDeleteCommentClick(e, commentID) {
    let commentsObj = { ...comments };
    let parentCommentID = commentsObj[commentID].parentID;
    let commentObj = commentsObj[commentID];
    delete commentsObj[commentID];
    if (commentObj.parentID) {
      commentsObj[parentCommentID].children = commentsObj[
        parentCommentID
      ].children.filter((ID) => ID !== commentID);
    }

    commentObj.children.forEach((ID) => {
      handleDeleteCommentClick(e, ID);
    });

    setComments(commentsObj);
  }
  console.log("comments", comments);

  return (
    <>
      <div className="comment-container">
        <span>{comment.comment}</span>
        <span className="comment-actions-container">
          <button
            className="comment-action-button reply-button"
            onClick={(e) => handleReplyCommentClick(e, comment.ID)}
          >
            reply
          </button>
          <button
            className="comment-action-button delete-button"
            onClick={(e) => handleDeleteCommentClick(e, comment.ID)}
          >
            delete
          </button>
        </span>
      </div>
      <div style={{ marginLeft: "25px" }}>
        {/* {console.log("commentInputData.isVisible", commentInputData.isVisible)} */}
        {commentInputData.isVisible && (
          <CommentInput
            commentInputData={commentInputData}
            setCommentInputData={setCommentInputData}
            handleAddCommentClick={handleAddCommentClick}
            cancelCommentClick={cancelCommentClick}
          />
        )}
        {comment.children.map((commentID) => {
          return (
            <div key={commentID}>
              <Comment
                comment={comments[commentID]}
                comments={comments}
                setComments={setComments}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Comment;
