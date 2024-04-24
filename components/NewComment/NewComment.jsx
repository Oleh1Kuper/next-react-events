'use client';

import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'next/navigation';
import { regexEmail } from '@/constants';
import classes from './NewComment.module.css';
import { Context } from '@/store/NotificationContexts';

const NewComment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: '',
      name: '',
      comment: '',
    },
  });

  const { eventId } = useParams();
  const { showNotification } = useContext(Context);
  const [isLoad, setIsLoad] = useState(false);


  const onSubmit = async (data) => {
    setIsLoad(true);

    showNotification({
      title: 'Sending comment...',
      message: 'Adding a new comment',
      status: 'pending',
    });

    try {
      const response = await fetch(`/api/comments/${eventId}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Internal Server Error');
      }

      showNotification({
        title: 'Success',
        message: 'Successfully added a new comment',
        status: 'success',
      });
      reset();
    } catch (error) {
      showNotification({
        title: 'Error!',
        message: error.message,
        status: 'error',
      });
    } finally {
      setIsLoad(false);
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.row}>
        <div className={classes.control}>
          <label htmlFor="email">Your email</label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: { value: regexEmail, message: 'Invalid email' },
            })}
            type="email"
            id="email"
          />

          {errors.email?.message && <p>{errors.email.message}</p>}
        </div>

        <div className={classes.control}>
          <label htmlFor="name">Your name</label>
          <input
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 3,
                message: 'Name must be at least 3 characters long',
              },
            })}
            type="text"
            id="name"
          />

          {errors.name?.message && <p>{errors.name.message}</p>}
        </div>
      </div>

      <div className={classes.control}>
        <label htmlFor="comment">Your comment</label>
        <textarea
          {...register('comment', {
            required: 'Comment is required',
            minLength: {
              value: 3,
              message: 'Comment must be at least 3 characters long',
            },
          })}
          id="comment"
          rows="5"
        />

        {errors.comment?.message && <p>{errors.comment.message}</p>}
      </div>

      <button disabled={isLoad} className={classes.btn} type="submit">
        {isLoad ? 'Loading...' : 'Submit'}
      </button>
    </form>
  );
};

export default NewComment;
