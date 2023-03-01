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
import ArtistCard from '../components/ArtistCard/ArtistCard';
import HomeArtistSec from '../components/HomeArtistSec/HomeArtistSec';
import TradingSongs from '../components/TradingSongs/TradingSongs';
import BestPlayList from '../components/BestPlayList/BestPlayList';
import Footer from '../components/Footer/Footer';
import TopGenres from '../components/TopGenres/TopGenres';
import PopularAlbum from '../components/PopularAlbum/PopularAlbum';

export default function Home() {
  const { state } = useMusicData();

  // if (state.loading) {
  //   return <p className="text-4xl font-bold">loading....</p>;
  // }
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
            className="space-y-24"
          >
            <NewSongSec />
            <PopularAlbum />
            <HomeArtistSec />
            <div className="grid grid-cols-1 lg:grid-cols-2  mb-10">
              <UpcomingEvent />
              <SongsTab />
            </div>
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
