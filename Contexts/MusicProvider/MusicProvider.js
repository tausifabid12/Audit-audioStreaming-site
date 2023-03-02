import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { ActionTypes } from '../../state/MusicState/ActionTypes';
import {
  initialState,
  musicReducer,
} from '../../state/MusicState/MusicReducer';

const MusicContext = createContext();

const MusicProvider = ({ children }) => {
  const [state, dispatch] = useReducer(musicReducer, initialState);

  const value = { state, dispatch };

  return (
    <MusicContext.Provider value={value}>{children}</MusicContext.Provider>
  );
};

export default MusicProvider;

export const useMusicData = () => {
  const context = useContext(MusicContext);
  return context;
};
