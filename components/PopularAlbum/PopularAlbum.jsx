import React, { useEffect, useState } from 'react';
import AlbumCard from '../AlbumCard/AlbumCard';

const PopularAlbum = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('/api/getAlbum')
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          setData(data?.data);
        }
      });
  }, []);

  return (
    <section className="my-14 px-8">
      <h2 className="text-white font-bold text-4xl pb-8">
        Popular <span className="text-primary">Albums</span>
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {data?.slice(1, 7).map((d) => (
          <AlbumCard key={d._id} data={d} />
        ))}
      </div>
    </section>
  );
};

export default PopularAlbum;
