import React from 'react';
import classes from './LogisticsItem.module.css';

const LogisticsItem = ({ children, icon }) => {
  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        {icon}
      </span>
      <span className={classes.content}>{children}</span>
    </li>
  );
};

export default LogisticsItem;
