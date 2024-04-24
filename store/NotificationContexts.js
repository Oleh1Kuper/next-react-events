'use client';

import React, { createContext, useEffect, useState } from 'react';

export const Context = createContext({
  notification: null,
  showNotification: () => {},
  hideNotification: () => {},
});

const NotificationContexts = ({ children }) => {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (notification?.status !== 'panding') {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [notification]);

  const showNotificationHandler = (data) => {
    setNotification(data);
  };

  const hideNotificationHandler = () => {
    setNotification(null);
  };

  const context = {
    notification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export default NotificationContexts;
