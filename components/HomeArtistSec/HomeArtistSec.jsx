import React, { useEffect, useState } from 'react';
import { useMusicData } from '../../Contexts/MusicProvider/MusicProvider';
import ArtistCard from '../ArtistCard/ArtistCard';

const HomeArtistSec = () => {
  const [data, setData] = useState();
  const { state } = useMusicData();

  useEffect(() => {
    fetch('/api/getArtists')
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          setData(data?.data);
        }
      });
  }, []);

  return (
    <section className="space-y-8 px-8 my-20">
      <h2 className="text-white font-bold text-4xl pb-5">
        Featured <span className="text-primary"> Artists</span>
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-5">
        {data?.map((d) => (
          <ArtistCard key={d._id} data={d} />
        ))}
      </div>
    </section>
  );
};

export default HomeArtistSec;

// export async function getStaticProps() {
//   const res = await fetch('/api/getArtists');
//   const artistsData = await res.json();

//   console.log(artistsData);

//   return {
//     props: { artistsData },
//   };
// }
