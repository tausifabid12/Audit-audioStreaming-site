import React from 'react';
import { BsHeart, BsStarFill } from 'react-icons/bs';
import FlatMusicCard from '../../components/FlatMusicCard/FlatMusicCard';
import Layout from '../../components/Layout/Layout';
import PageTop from '../../components/PageTop/PageTop';
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
      <PageTop />
      {/* hero */}
      <div className="card lg:card-side bg-transparent px-16 mb-16 -my-20">
        <img src={image} className="w-full lg:w-72 rounded-xl" alt="Album" />

        <div className="card-body text-white lg:py-3 lg:px-20">
          <h2 className="text-4xl font-semibold text-primary">{name}</h2>
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
      <section>
        {/* body */}
        <div className="min-h-screen relative px-10 overflow-hidden">
          <h1 className="text-primary text-4xl font-bold py-4 relative z-20">
            # Top Songs
          </h1>
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
