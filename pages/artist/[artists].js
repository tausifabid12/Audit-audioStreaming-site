import React from 'react';
import FlatMusicCard from '../../components/FlatMusicCard/FlatMusicCard';
import Layout from '../../components/Layout/Layout';
import clientPromise from '../../utilities/mongoDb-connect/mongoDb-connect';

const Artist = ({ data }) => {
  const { image, name, songs } = data;

  const bgStyle = {
    background: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${
      image ? image : '/assets/hero.jpg'
    })`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <Layout>
      <section>
        {/* hero */}
        <div style={bgStyle} className="h-80 w-full relative -z-10">
          <div className="h-48 w-full absolute bottom-0 bg-gradient-to-t from-accent to-transparent "></div>
          <div className="w-full h-full bg-black/30 backdrop-blur-2xl">
            <div className="flex flex-col items-start justify-end h-full py-6 px-8">
              <div className="relative z-30">
                <img src={image} className="w-32 h-32 rounded-full" alt="" />
                <h1 className="text-2xl text-center mt-2 text-white font-bold">
                  {name}
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* body */}
        <div className="min-h-screen relative">
          <div className="h-48 w-full absolute -z-10 -top-10 bg-gradient-to-b from-transparent to-accent "></div>
          <div className="w-full min-h-screen px-7 py-12">
            {songs.map((song, i) => (
              <div className="flex items-center space-x-5">
                <p className="text-white text-xl">{i + 1}</p>
                <FlatMusicCard key={song?._id} data={song}></FlatMusicCard>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticProps(context) {
  const { params } = context;

  try {
    const client = await clientPromise;
    const songsData = client.db('audit-songs').collection('songsData');
    const artist = client.db('audit-songs').collection('artistsData');

    const albumData = await songsData
      .find({ artistName: params.artists })
      .toArray();

    const artistData = await artist.findOne({ name: params.artists });
    const albumDetails = JSON.parse(JSON.stringify(albumData));

    const data = {
      name: artistData.name,
      image: artistData.img,
      songs: albumDetails,
    };
    console.log(params.artists);
    return {
      props: {
        data: data,
      },
    };
  } catch (e) {
    console.error(e);
  }
}

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/songsData');
  const songsData = await res.json();

  const paths = songsData?.data?.map((data) => {
    return {
      params: {
        artists: `${data.artistName}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export default Artist;
