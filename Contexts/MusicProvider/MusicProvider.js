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

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/songsData')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const value = { allSongData: data, state, dispatch };

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
