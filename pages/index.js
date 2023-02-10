import Layout from '../components/Layout/Layout';
import MusicCard from '../components/MusicCard/MusicCard';
import Player from '../components/Player/Player';

export default function Home() {
  const musics = [
    {
      id: 1,
      artists: 'unknown',
      name: 'unknown',
      song: 'somethings',
      photo: '',
      bgColor: '',
      duration: '',
    },
  ];
  return (
    <div
      style={{
        backgroundImage: 'url(/bg-img.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <Layout>
        <main className="min-h-[600px]">
          <MusicCard />
        </main>
      </Layout>
      <Player />
    </div>
  );
}
