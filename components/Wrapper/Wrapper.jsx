'use client';

import React, { useContext } from 'react';
import { Context } from '@/store/NotificationContexts';
import Notification from '../Notification/Notification';

const Wrapper = ({ children }) => {
  const { notification } = useContext(Context);

  return (
    <>
      {children}
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </>
  );
};

export default Wrapper;
