import Link from 'next/link';
import React from 'react';

const ArtistCard = ({ data }) => {
  return (
    <Link
      href={`/artist/${data?.name}`}
      className="w-full grid place-content-center space-y-2"
    >
      <img src={data?.img} className="h-40 w-40 rounded-full" alt="" />
      <p className="text-lg  text-gray-300 mx-auto">{data?.name}</p>
    </Link>
  );
};

export default ArtistCard;
