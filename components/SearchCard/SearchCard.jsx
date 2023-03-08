import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { useMusicData } from '../../Contexts/MusicProvider/MusicProvider';
import { ActionTypes } from '../../state/MusicState/ActionTypes';

const SearchCard = (data) => {
  const { dispatch, state } = useMusicData();
  const { songName, imgUrl, artistName } = data?.data;

  return (
    <div
      onClick={() => {
        dispatch({
          type: ActionTypes.AddCurrentSongInfo,
          payload: data?.data,
        });
        dispatch({
          type: ActionTypes.IsSongPlaying,
          payload: !state.isPlaying,
        });
      }}
      className="flex bg-accent  rounded-lg shadow-xl text-white group cursor-pointer"
    >
      <div className="relative">
        <img src={imgUrl} className="w-20 h-20 rounded-l-md" alt="" />
        <button className="flex items-center justify-center absolute z-10 bottom-5 right-5 transition-all duration-200 ease-linear rounded-full bg-primary/60 backdrop-blur-sm opacity-0 group-hover:opacity-100">
          <BsFillPlayFill size="35" className=" text-white" />
        </button>
      </div>
      <div className="pl-4 py-3">
        <h2 className="font-bold">{songName}</h2>
        <p className="text-gray-500">{artistName}</p>
      </div>
    </div>
  );
};

export default SearchCard;
