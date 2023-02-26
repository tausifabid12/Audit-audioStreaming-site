import React from 'react';
import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout/Layout';
import PopularAlbum from '../components/PopularAlbum/PopularAlbum';
import TradingSongs from '../components/TradingSongs/TradingSongs';

const Albums = () => {
  return (
    <Layout>
      <section className="w-full   ">
        <Hero />
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

export default Albums;
