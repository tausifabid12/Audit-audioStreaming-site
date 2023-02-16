import React from 'react';
import { useMusicData } from '../../Contexts/MusicProvider/MusicProvider';
import { ActionTypes } from '../../state/MusicState/ActionTypes';
import { BsFillPlayCircleFill } from 'react-icons/bs';

const MusicCard = ({ data }) => {
  const { dispatch, state } = useMusicData();
  const { songName, imgUrl, audioUrl, artistName, albumName } = data;

  console.log(state);
  return (
    <div className="w-full h-[350px] rounded-lg bg-transparent backdrop-blur-md group relative">
      <div className="h-2/3 w-full">
        <img src={imgUrl} className="w-full h-full rounded-2xl " alt="" />
      </div>
      <div className="pt-4">
        <h2 className="text-sm font-semibold text-white ">{songName}</h2>
        <h2 className="text-xs font-semibold text-white/50 ">{albumName}</h2>
      </div>
      <button
        onClick={() => {
          dispatch({
            type: ActionTypes.AddCurrentSongInfo,
            payload: { songName, artistName, audioUrl },
          });
          dispatch({
            type: ActionTypes.IsSongPlaying,
            payload: !state.isPlaying,
          });
        }}
        className="flex items-center justify-center absolute z-10 top-24 left-24 transition-all duration-500 ease-linear  w-10 h-10 rounded-full bg-black opacity-0 group-hover:opacity-100"
      >
        <BsFillPlayCircleFill className="text-2xl text-primary" />
      </button>
    </div>
  );
};

export default MusicCard;
