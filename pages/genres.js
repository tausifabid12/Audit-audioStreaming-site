import React from 'react';
import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout/Layout';
import TopGenres from '../components/TopGenres/TopGenres';
import TradingSongs from '../components/TradingSongs/TradingSongs';

const Genres = () => {
  return (
    <Layout>
      <section className="w-full   ">
        <Hero />
        <div className="-my-28 relative z-20">
          <TopGenres />
        </div>
        <div className="mt-48 mb-20">
          <TradingSongs />
        </div>
      </section>
    </Layout>
  );
};

export default Genres;
