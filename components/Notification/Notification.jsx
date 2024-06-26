'use client';

import React, { useContext } from 'react';
import classes from './Notification.module.css';
import { Context } from '@/store/NotificationContexts';

const Notification = ({ title, message, status }) => {
  const { hideNotification } = useContext(Context);

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  if (status === 'pending') {
    statusClasses = classes.pending;
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={activeClasses} onClick={hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
