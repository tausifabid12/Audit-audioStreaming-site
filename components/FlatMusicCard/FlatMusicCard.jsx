import React from 'react';

const FlatMusicCard = () => {
  return (
    <div className="flex items-center justify-between text-white h-20 px-3 rounded-lg  w-full hover:bg-white/5 cursor-pointer">
      <div className="flex items-center space-x-3">
        <img src="/assets/user.jpg" className="w-16 h-16 rounded-md" alt="" />
        <div>
          <p className="font-semibold">Song name</p>
          <p className="text-gray-500">Artist name</p>
        </div>
      </div>
      <p>Album Name...</p>
      <p>2:03</p>
    </div>
  );
};

export default FlatMusicCard;
