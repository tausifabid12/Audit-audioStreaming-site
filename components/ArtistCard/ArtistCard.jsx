import React from 'react';

const ArtistCard = () => {
  return (
    <div className="w-full grid place-content-center space-y-2">
      <img src="/assets/user.jpg" className="h-40 w-40 rounded-full" alt="" />
      <p className="text-lg  text-gray-300 mx-auto">Artist Name</p>
    </div>
  );
};

export default ArtistCard;
