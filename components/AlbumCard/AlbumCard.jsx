import React from 'react';
import { FaDatabase } from 'react-icons/fa';

const AlbumCard = ({ data }) => {
  return (
    <div className="p-3">
      <div>
        <img src={data?.img} className="w-full h-[200px] rounded-2xl" alt="" />
      </div>
      <div className="mt-4 px-2 space-y-3">
        <p className="flex items-center  text-sm text-gray-400">
          <FaDatabase className="text-lg mr-2" />
          <span>10 jan 2025</span>
        </p>
        <div className="flex items-center justify-between">
          <h1 className="text-white font-bold text-lg">{data?.name}</h1>
          <button className="border bg-primary/10 rounded-lg border-none text-primary/80 px-2 py-1">
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
