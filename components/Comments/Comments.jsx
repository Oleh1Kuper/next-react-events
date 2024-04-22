'use client';

import React, { useEffect, useState } from 'react';
import NewComment from '../NewComment/NewComment';
import CommentList from '../CommentList/CommentList';
import classes from './Comments.module.css';
import { useParams } from 'next/navigation';

const Comments = () => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(null);
  const { eventId } = useParams();

  const fetchComments = async () => {
    const response = await fetch(`/api/comments/${eventId}`);
    const data = await response.json();

    setComments(data.comments);
  };

  useEffect(() => {
    if (showComments) {
      fetchComments();
    }
  }, [showComments])

  const toggleCommentsHandler = () => {
    setShowComments(!showComments);
  };

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>

      {showComments && <NewComment />}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
};

export default Comments;
