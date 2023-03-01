import React from 'react';
import { BsHeart, BsStarFill } from 'react-icons/bs';
import FlatMusicCard from '../../components/FlatMusicCard/FlatMusicCard';
import Hero from '../../components/Hero/Hero';
import Layout from '../../components/Layout/Layout';
import PageTop from '../../components/PageTop/PageTop';
import clientPromise from '../../utilities/mongoDb-connect/mongoDb-connect';

const Album = ({ albumData }) => {
  console.log(albumData.songs);
  return (
    <Layout>
      <div>
        <PageTop />
        <div className="card lg:card-side bg-transparent px-16 mb-16 -my-20">
          <img
            src={albumData?.image}
            className="w-full lg:w-72 rounded-xl"
            alt="Album"
          />

          <div className="card-body text-white lg:py-3 lg:px-20">
            <h2 className="text-4xl font-semibold text-primary">
              {albumData?.name}
            </h2>
            <p className="text-md text-gray-400">10 Album | 250 Songs</p>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
              explicabo! Iure quo fugit laborum labore. Culpa ad provident eaque
              repudiandae ut voluptas cum.
            </p>
            <div className="flex items-center space-x-11">
              <span className="flex items-center space-x-2">
                <BsHeart />
                <p>4.9</p>
              </span>
              <span className="flex items-center space-x-2">
                <BsStarFill className="text-yellow-500" />
                <p>245</p>
              </span>
            </div>
          </div>
        </div>
        <section className="w-full min-h-screen px-10  ">
          <h1 className="text-primary text-4xl font-bold py-10 relative z-20">
            # Top Songs
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
