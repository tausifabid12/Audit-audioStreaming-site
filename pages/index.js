import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout/Layout';
import { useMusicData } from '../Contexts/MusicProvider/MusicProvider';
import NewSongSec from '../components/NewSongSec/NewSongSec';
import UpcomingEvent from '../components/UpcomingEvent/UpcomingEvent';
import SongsTab from '../components/Songstab/SongsTab';
import HomeArtistSec from '../components/HomeArtistSec/HomeArtistSec';
import TradingSongs from '../components/TradingSongs/TradingSongs';
import BestPlayList from '../components/BestPlayList/BestPlayList';
import TopGenres from '../components/TopGenres/TopGenres';
import PopularAlbum from '../components/PopularAlbum/PopularAlbum';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { ActionTypes } from '../state/MusicState/ActionTypes';

export default function Home({ data }) {
  const { state, dispatch } = useMusicData();
  const eventRef = useRef(null);
  const isInView = useInView(eventRef);

  useEffect(() => {
    if (data?.songsData?.success) {
      dispatch({ type: ActionTypes.SongData, payload: data?.songsData?.data });
      dispatch({ type: ActionTypes.Loading, payload: false });
    } else {
      dispatch({ type: ActionTypes.Loading, payload: true });
    }

    if (data?.albumData?.success) {
      dispatch({
        type: ActionTypes.AddAlbumData,
        payload: data?.albumData?.data,
      });
    }
  }, [data?.songsData, data?.songsData?.success, data?.albumData?.success]);

  if (state.loading) {
    return <p className="text-4xl font-bold">loading....</p>;
  }
  const img = null;
  return (
    <div className="">
      <Layout>
        <div className="h-auto pb-28">
          <Hero />
          <section
            style={{
              background: `linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ), url(${
                img ? img : '/assets/banner-bg.png'
              })`,
              backgroundPosition: 'left bottom',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
            }}
            className="space-y-24 pt-3"
          >
            <NewSongSec />
            <PopularAlbum />
            <HomeArtistSec />
            <motion.div
              ref={eventRef}
              className="grid grid-cols-1 lg:grid-cols-2  mb-10 overflow-hidden"
            >
              <motion.div
                animate={{ x: isInView ? 0 : -30 }}
                transition={{ type: 'spring', stiffness: 70 }}
              >
                <UpcomingEvent />
              </motion.div>
              <motion.div
                animate={{ x: isInView ? 0 : 30 }}
                transition={{ type: 'spring', stiffness: 70 }}
              >
                <SongsTab />
              </motion.div>
            </motion.div>
            <NewSongSec />
            <TradingSongs />
            <BestPlayList />
            <TopGenres />
          </section>
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  //getting song data
  const res = await fetch(
    'https://audit-audio-e69qzaxzn-tausifabid12.vercel.app/api/songsData'
  );
  const songsData = await res.json();

  // getting album data
  const albumRes = await fetch(
    'https://audit-audio-e69qzaxzn-tausifabid12.vercel.app/api/getAlbum'
  );
  const albumData = await albumRes.json();

  const data = { songsData, albumData };

  return {
    props: {
      data: data,
    },
  };
}
