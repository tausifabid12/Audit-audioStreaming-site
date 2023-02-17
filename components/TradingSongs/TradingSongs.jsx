import React from 'react';
import { useMusicData } from '../../Contexts/MusicProvider/MusicProvider';
import FlatMusicCard from '../FlatMusicCard/FlatMusicCard';

const TradingSongs = () => {
  const { state } = useMusicData();
  return (
    <section className="px-8 my-12">
      <h2 className="text-white font-bold text-4xl pb-5">
        Trading <span className="text-primary">This Week</span>
      </h2>
      <div className="grid col-span-1 lg:grid-cols-2 gap-4">
        {state.songData &&
          state.songData
            .slice(0, 8)
            .map((song) => <FlatMusicCard key={song?._id} data={song} />)}
      </div>
    </section>
  );
};

export default TradingSongs;
