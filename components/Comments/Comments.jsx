'use client';

import { useParams } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import CommentList from '../CommentList/CommentList';
import NewComment from '../NewComment/NewComment';
import classes from './Comments.module.css';
import { Context } from '@/store/NotificationContexts';

const Comments = () => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(null);
  const { eventId } = useParams();
  const { notification } = useContext(Context);

  const fetchComments = async () => {
    try {
      const response = await fetch(`/api/comments/${eventId}`);
      const data = await response.json();
  
      setComments(data.comments);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    if (showComments || !notification) {
      fetchComments();
    }
  }, [showComments, notification]);

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
