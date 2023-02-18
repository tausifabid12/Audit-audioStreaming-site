import React from 'react';
import { useMusicData } from '../../Contexts/MusicProvider/MusicProvider';
import { ActionTypes } from '../../state/MusicState/ActionTypes';
import { BsFillPlayFill } from 'react-icons/bs';

const MusicCard = ({ data }) => {
  const { dispatch, state } = useMusicData();
  const { songName, imgUrl, audioUrl, artistName, albumName, duration } = data;

  return (
    <div className="w-full h-[310px] rounded-lg bg-transparent backdrop-blur-md group ">
      <div className="h-2/3 w-full relative">
        <img src={imgUrl} className="w-full h-full rounded-2xl " alt="" />
        {/* play button */}
        <button
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
          className="flex items-center justify-center absolute z-10 bottom-3 right-3 transition-all duration-500 ease-linear  rounded-full bg-gray-800 opacity-0 group-hover:opacity-100"
        >
          <BsFillPlayFill className="text-3xl m-2 text-white" />
        </button>
      </div>
      <div className="pt-4">
        <h2 className="text-md font-semibold text-white ">{songName}</h2>
        <h2 className="text-xs font-semibold text-white/50 ">{albumName}</h2>
      </div>
    </div>
  );
};

export default MusicCard;
