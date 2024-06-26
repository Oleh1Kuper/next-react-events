import React from 'react';
import classes from './CommentList.module.css';

const CommentList = ({ comments }) => {
  return (
    <ul className={classes.comments}>
      {comments?.map((comment) => (
        <li key={comment._id}>
          <p>{comment.comment}</p>
          <div>
            By <address>{comment.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
