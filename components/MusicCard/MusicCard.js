import React from 'react';
import { useMusicData } from '../../Contexts/MusicProvider/MusicProvider';
import { ActionTypes } from '../../state/MusicState/ActionTypes';
import { BsFillPlayFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

const MusicCard = ({ data }) => {
  const { dispatch, state } = useMusicData();
  const { songName, imgUrl, audioUrl, artistName, albumName, duration } = data;

  return (
    <div className="w-full h-[310px] rounded-lg cursor-pointer bg-transparent backdrop-blur-md group hover:brightness-75 ">
      <div className="h-2/3 w-full relative">
        <img src={imgUrl} className="w-full h-full rounded-2xl " alt="" />
        {/* play button */}
        <div className="w-full h-full grid place-content-center absolute z-10 top-0 transition-all duration-500 ease-linear hover:bg-gradient-to-t from-[rgba(25,110,237,0.3)] to-transparent   rounded-2xl opacity-0 group-hover:opacity-100 border-b-4 border-primary">
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
            className="flex items-center justify-center w-12  rounded-full bg-gray-800 "
          >
            <BsFillPlayFill className="text-3xl m-2 text-white" />
          </button>
        </div>
      </div>
      <div className="pt-4">
        <h2 className="text-md font-semibold text-white ">{songName}</h2>
        <h2 className="text-xs font-semibold text-white/50 ">{albumName}</h2>
      </div>
    </div>
  );
};

export default MusicCard;
