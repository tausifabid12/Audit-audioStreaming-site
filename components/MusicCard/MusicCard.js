import React from 'react';
import { useMusicData } from '../../Contexts/MusicProvider/MusicProvider';
import { ActionTypes } from '../../state/MusicState/ActionTypes';

const MusicCard = ({ data }) => {
  const { dispatch, state } = useMusicData();
  const { songName, imgUrl, audioUrl, artistName, albumName } = data;
  return (
    <div className="w-full h-[230px] rounded-lg bg-black/40 backdrop-blur-md p-3 ">
      <div className="h-2/3 w-full">
        <img
          src={imgUrl}
          className="w-full h-full rounded-lg hover:shadow-lg hover:shadow-primary"
          alt=""
        />
      </div>
      <div className="pt-4">
        <h2 className="text-sm font-semibold text-white text-center">
          {songName}
        </h2>
        <h2 className="text-xs font-semibold text-white/50 text-center">
          {albumName}
        </h2>
      </div>
      <button
        onClick={() =>
          dispatch({
            type: ActionTypes.AddCurrentSongInfo,
            payload: { songName, artistName, audioUrl },
          })
        }
        className="w-10 h-10 rounded-full bg-primary"
      >
        paly
      </button>
    </div>
  );
};

export default MusicCard;
