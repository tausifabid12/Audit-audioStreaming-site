import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout/Layout';
import MusicCard from '../components/MusicCard/MusicCard';
import Player from '../components/Player/Player';
import { useMusicData } from '../Contexts/MusicProvider/MusicProvider';
import { Swiper, SwiperSlide } from 'swiper/react';
import NewSongSec from '../components/NewSongSec/NewSongSec';
import UpcomingEvent from '../components/UpcomingEvent/UpcomingEvent';
import FlatMusicCard from '../components/FlatMusicCard/FlatMusicCard';
import SongsTab from '../components/Songstab/SongsTab';

export default function Home() {
  const { state } = useMusicData();

  if (state.loading) {
    return <p className="text-4xl font-bold">loading....</p>;
  }
  return (
    <div
      className="bg-[#13131a]"
      // style={{
      //   backgroundImage: 'url(/bg.jpg)',
      //   backgroundPosition: 'center',
      //   backgroundSize: 'cover',
      // }}
    >
      <Layout>
        <main>
          <Hero />
          <NewSongSec />
          <div className="grid grid-cols-1 lg:grid-cols-2 pag-2">
            <UpcomingEvent />
            <SongsTab />
          </div>
        </main>
      </Layout>
    </div>
  );
}
