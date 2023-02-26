import React from 'react';

const ArtistCard = ({ data }) => {
  return (
    <div className="w-full grid place-content-center space-y-2">
      <img src={data?.img} className="h-40 w-40 rounded-full" alt="" />
      <p className="text-lg  text-gray-300 mx-auto">{data?.name}</p>
    </div>
  );
};

export default ArtistCard;
