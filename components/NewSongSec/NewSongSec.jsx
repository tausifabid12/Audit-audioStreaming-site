import React from 'react';
import { useMusicData } from '../../Contexts/MusicProvider/MusicProvider';
import MusicCard from '../MusicCard/MusicCard';

const NewSongSec = () => {
  const { state } = useMusicData();
  return (
    <div className="p-7 pb-16 -my-16 w-full relative z-20">
      <p className="text-gray-300 text-xs capitalize">LISTEN TOP CHARTS</p>
      <h2 className="text-white font-bold text-4xl pb-5">
        New To <span className="text-primary">Audit</span>
      </h2>
      <div className="h-full grid grid-cols-2 lg:grid-cols-5 gap-5 ">
        {state?.songData.length &&
          state?.songData
            .slice(0, 5)
            .map((data) => <MusicCard key={data?._id} data={data} />)}
      </div>
    </div>
  );
};

export default NewSongSec;
