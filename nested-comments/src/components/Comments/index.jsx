import "./css/comment.css";
import { commentsData } from "./data";
import Comment from "./Comment";
import { useState } from "react";

function Comments() {
  const [comments, setComments] = useState(commentsData);

  let rootComments = [];
  for (let key in comments) {
    let obj = comments[key];
    if (obj.parentID === null) {
      rootComments.push(obj);
    }
  }

  return (
    <>
      {rootComments.map((comment) => {
        return (
          <div key={comment.ID}>
            <Comment
              comment={comment}
              comments={comments}
              setComments={setComments}
            />
          </div>
        );
      })}
    </>
  );
}

export default Comments;
