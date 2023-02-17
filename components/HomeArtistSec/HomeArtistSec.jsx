import React from 'react';
import { useMusicData } from '../../Contexts/MusicProvider/MusicProvider';
import ArtistCard from '../ArtistCard/ArtistCard';

const HomeArtistSec = () => {
  const { state } = useMusicData();
  return (
    <section className="space-y-8 px-8 mb-10">
      <h2 className="text-white font-bold text-4xl pb-5">
        Featured <span className="text-primary"> Artists</span>
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-5">
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
      </div>
    </section>
  );
};

export default HomeArtistSec;
