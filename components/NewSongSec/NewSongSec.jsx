import React from 'react';
import { useMusicData } from '../../Contexts/MusicProvider/MusicProvider';
import MusicCard from '../MusicCard/MusicCard';

const NewSongSec = () => {
  const { state } = useMusicData();
  return (
    <div className="px-7 w-full relative z-20 pt-12">
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
