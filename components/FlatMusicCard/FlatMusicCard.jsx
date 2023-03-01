import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { useMusicData } from '../../Contexts/MusicProvider/MusicProvider';
import { ActionTypes } from '../../state/MusicState/ActionTypes';

const FlatMusicCard = ({ data }) => {
  const { dispatch, state } = useMusicData();
  const { albumName, artistName, songName, imgUrl, audioUrl, duration } = data;
  return (
    <div
      onClick={() => {
        dispatch({
          type: ActionTypes.AddCurrentSongInfo,
          payload: { songName, artistName, audioUrl, duration },
        });
        dispatch({
          type: ActionTypes.IsSongPlaying,
          payload: !state.isPlaying,
        });
      }}
      className="flex items-center justify-between text-white h-20 px-3 rounded-lg  w-full hover:bg-white/5 cursor-pointer group"
    >
      <div className="flex items-center space-x-3">
        <div className="relative">
          <img src={imgUrl} className="w-16 h-16 rounded-md" alt="" />
          <button className="flex items-center justify-center absolute z-10 bottom-4 right-4 transition-all duration-200 ease-linear rounded-full bg-primary/60 backdrop-blur-sm opacity-0 group-hover:opacity-100">
            <BsFillPlayFill size="35" className=" text-white" />
          </button>
        </div>
        <div>
          <p className="font-semibold">{songName}</p>
          <p className="text-gray-500">{artistName}</p>
        </div>
      </div>
      {/* <p className="text-center">Album Name...</p> */}
      <p>{duration}</p>
    </div>
  );
};

export default FlatMusicCard;
