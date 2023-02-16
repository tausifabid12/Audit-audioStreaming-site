import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout/Layout';
import MusicCard from '../components/MusicCard/MusicCard';
import Player from '../components/Player/Player';
import { useMusicData } from '../Contexts/MusicProvider/MusicProvider';

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
          <div className="p-7">
            <h2 className="text-white font-bold text-2xl pb-5">New To Audit</h2>
            <div className="h-full grid grid-cols-2 lg:grid-cols-5 gap-3 ">
              {state?.songData.length &&
                state?.songData.map((data) => (
                  <MusicCard key={data?._id} data={data} />
                ))}
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}
