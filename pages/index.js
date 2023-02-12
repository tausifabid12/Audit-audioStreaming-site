import Layout from '../components/Layout/Layout';
import MusicCard from '../components/MusicCard/MusicCard';
import Player from '../components/Player/Player';
import { useMusicData } from '../Contexts/MusicProvider/MusicProvider';

export default function Home() {
  const allMusicData = useMusicData();

  const allData = allMusicData?.allSongData;

  return (
    <div
      style={{
        backgroundImage: 'url(/bg.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <Layout>
        <main>
          <div className="p-7">
            <h2 className="text-white font-bold text-2xl pb-5">New To Audit</h2>
            <div className="h-full grid grid-cols-2 lg:grid-cols-5 gap-3 ">
              {/* {allData} */}
              {allData?.success &&
                allData?.data.map((data) => (
                  <MusicCard key={data?._id} data={data} />
                ))}
            </div>
          </div>
        </main>
      </Layout>
      <Player />
    </div>
  );
}
