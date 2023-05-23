import React from 'react';

const context = {
  userId: null,
  isLiked: false,
  setUser: (userId: string) => {},
  setIsLiked: (isLiked: boolean) => {}
};

export const AppContext = React.createContext(context);
