import React, { useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout/Layout';
import PageTop from '../components/PageTop/PageTop';
import PopularAlbum from '../components/PopularAlbum/PopularAlbum';
import TradingSongs from '../components/TradingSongs/TradingSongs';
import { useMusicData } from '../Contexts/MusicProvider/MusicProvider';
import { ActionTypes } from '../state/MusicState/ActionTypes';

const Albums = ({ albumData }) => {
  const { dispatch } = useMusicData();

  useEffect(() => {
    if (albumData?.success) {
      dispatch({ type: ActionTypes.AddAlbumData, payload: albumData?.data });
    }
  }, [albumData, albumData?.success]);

  return (
    <Layout>
      <section className="w-full">
        <PageTop />
        <div className="-my-28 relative z-20">
          <PopularAlbum />
        </div>
        <div className="mt-48 mb-20">
          <TradingSongs />
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    'https://audit-audio-e69qzaxzn-tausifabid12.vercel.app/api/getAlbum'
  );
  const albumData = await res.json();

  return {
    props: {
      albumData: albumData,
    },
  };
}

export default Albums;
