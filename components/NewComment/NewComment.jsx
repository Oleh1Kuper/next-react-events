'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'next/navigation';
import { regexEmail } from '@/constants';
import classes from './NewComment.module.css';

const NewComment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      name: '',
      comment: '',
    },
  });

  const { eventId } = useParams();

  const onSubmit = async (data) => {
    await fetch(`/api/comments/${eventId}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
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

      <button className={classes.btn} type="submit">Submit</button>
    </form>
  );
};

export default NewComment;
