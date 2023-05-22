import React from 'react';

const context = {
  userId: null,
  setUser: (userId: string) => {},
};

export const AppContext = React.createContext(context);
