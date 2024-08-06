/* eslint-disable react/prop-types */
import { Button } from '@mui/material';
import React from 'react';

export const MyButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};
