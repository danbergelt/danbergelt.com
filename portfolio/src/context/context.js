import React, { useState, createContext, useEffect } from 'react';

import { checkDark } from '../utils/darkmode';

export const DarkContext = createContext();

export const DarkProvider = ({ children }) => {

  const [dark, setDark] = useState(localStorage.getItem('dark') ? true : false);

  return (
    <DarkContext.Provider value={[dark, setDark]}>
      {children}
    </DarkContext.Provider>
  );
}