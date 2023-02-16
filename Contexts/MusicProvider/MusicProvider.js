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

  useEffect(() => {
    dispatch({ type: ActionTypes.Loading, payload: true });
    fetch('/api/songsData')
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          dispatch({ type: ActionTypes.SongData, payload: data?.data });
          dispatch({ type: ActionTypes.Loading, payload: false });
        }
      });
  }, []);

  const value = { state, dispatch };

  return (
    <MusicContext.Provider value={value}>{children}</MusicContext.Provider>
  );
};

// export async function getServerSideProp() {
//   const res = await fetch('/api/songsData');
//   const allSongData = await res.json();
//   console.log(allSongData, res);
//   return {
//     props: { allSongData: allSongData },
//   };
// }

export default MusicProvider;

export const useMusicData = () => {
  const context = useContext(MusicContext);
  return context;
};
