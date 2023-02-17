import React from 'react';
import FlatMusicCard from '../FlatMusicCard/FlatMusicCard';

const SongsTab = () => {
  return (
    <div className="py-5 px-8">
      <div className="flex items-center w-full mb-6 border-b-[1px] border-gray-800 text-gray-100">
        <a
          rel="noopener noreferrer"
          href="#"
          className="px-5 py-1 font-semibold border-b-2 border-primary text-primary"
        >
          Recent Songs
        </a>
        <a rel="noopener noreferrer" href="#" className="px-5 py-1 semibold">
          Treading
        </a>
        <a rel="noopener noreferrer" href="#" className="px-5 py-1 semibold">
          International
        </a>
      </div>
      <div>
        <FlatMusicCard />
        <FlatMusicCard />
        <FlatMusicCard />
        <FlatMusicCard />
      </div>
    </div>
  );
};

export default SongsTab;
