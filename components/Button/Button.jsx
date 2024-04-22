'use client';

import React from 'react';
import Link from 'next/link';
import classes from './Button.module.css';

const Button = ({ children, link }) => {
  if (link) {
    return (
      <Link href={link} className={classes.btn}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="submit"
      className={classes.btn}
    >
      {children}
    </button>
  );
};

export default Button;
