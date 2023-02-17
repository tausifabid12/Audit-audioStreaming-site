import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';

const FlatMusicCard = ({ data }) => {
  const { albumName, artistName, songName, imgUrl } = data;
  return (
    <div className="flex items-center justify-between text-white h-20 px-3 rounded-lg  w-full hover:bg-white/5 cursor-pointer group">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <img src={imgUrl} className="w-16 h-16 rounded-md" alt="" />
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
            className="flex items-center justify-center absolute z-10 bottom-3 right-3 transition-all duration-500 ease-linear  rounded-full bg-gray-800 opacity-0 group-hover:opacity-100"
          >
            <BsFillPlayFill className="text-3xl m-1 text-white" />
          </button>
        </div>
        <div>
          <p className="font-semibold">{songName}</p>
          <p className="text-gray-500">{artistName}</p>
        </div>
      </div>
      {/* <p className="text-center">Album Name...</p> */}
      <p>2:03</p>
    </div>
  );
};

export default FlatMusicCard;
