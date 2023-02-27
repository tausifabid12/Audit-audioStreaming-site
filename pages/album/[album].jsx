import React from 'react';
import FlatMusicCard from '../../components/FlatMusicCard/FlatMusicCard';
import Hero from '../../components/Hero/Hero';
import Layout from '../../components/Layout/Layout';
import clientPromise from '../../utilities/mongoDb-connect/mongoDb-connect';

const Album = ({ albumData }) => {
  console.log(albumData.songs);
  return (
    <Layout>
      <div>
        <Hero img={albumData?.image} />
        <section className="w-full min-h-screen px-10 -my-20 ">
          <h1 className="text-primary text-4xl font-bold py-10 relative z-20">
            # {albumData?.name}{' '}
          </h1>
          {albumData?.songs.map((song) => (
            <FlatMusicCard key={song?._id} data={song}></FlatMusicCard>
          ))}
        </section>
      </div>
    </Layout>
  );
};

export async function getStaticProps(context) {
  const { params } = context;

  try {
    const client = await clientPromise;
    const songsData = client.db('audit-songs').collection('songsData');
    const album = client.db('audit-songs').collection('albumData');

    const albumData = await songsData
      .find({ albumName: params.album })
      .toArray();

    const albumImg = await album.findOne({ name: params.album });
    const albumDetails = JSON.parse(JSON.stringify(albumData));

    const data = {
      name: albumImg.name,
      image: albumImg.img,
      songs: albumDetails,
    };

    return {
      props: {
        albumData: data,
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
        album: `${data.albumName}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default Album;
