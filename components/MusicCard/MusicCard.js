import React from 'react';
import { useMusicData } from '../../Contexts/MusicProvider/MusicProvider';
import { ActionTypes } from '../../state/MusicState/ActionTypes';
import { BsPlayCircle } from 'react-icons/bs';
import { motion } from 'framer-motion';

const MusicCard = ({ data }) => {
  const { dispatch, state } = useMusicData();
  const { songName, imgUrl, audioUrl, artistName, albumName, duration } = data;

  return (
    <div className="w-full h-52 lg:h-[300px] rounded-lg cursor-pointer bg-transparent  group hover:brightness-75 ">
      <div className="h-2/3 w-full relative">
        <img src={imgUrl} className="w-full h-full rounded-2xl " alt="" />
        {/* play button */}
        <div className="w-full h-full grid place-content-center absolute z-10 top-0 transition-all duration-200 ease-linear   rounded-2xl opacity-0 group-hover:opacity-100 ">
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
            className="flex items-center justify-center w-12  rounded-full bg-white/30 backdrop-blur-sm "
          >
            <BsPlayCircle size="50" className=" text-white" />
          </button>
        </div>
      </div>
      <div className="pt-4">
        <h2 className="text-sm lg:text-md font-semibold text-white ">
          {songName}
        </h2>
        <h2 className="hidden lg:block text-xs font-semibold text-white/50 ">
          {albumName}
        </h2>
      </div>
    </div>
  );
};

export default MusicCard;
