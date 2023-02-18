import React from 'react';

const TopGenres = () => {
  return (
    <section className="px-8 my-20">
      <h2 className="text-white font-bold text-4xl pb-12">
        Top <span className="text-primary"> Genres</span>
      </h2>
      <div className="grid grid-cols-6 grid-rows-2 gap-4 h-96">
        <div
          style={{
            background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url('/assets/rock.jpg')`,
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
          }}
          className="col-span-2 row-span-2 rounded-2xl flex items-end p-5"
        >
          <div className="text-white font-semibold ">
            <h5 className="text-2xl">Rock Music</h5>
            <p className="text-sm">10 Songs | 5 Albums</p>
          </div>
        </div>
        <div
          style={{
            background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8) ), url('/assets/classic-music.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
          className="rounded-2xl flex items-end p-5"
        >
          <div className="text-white font-semibold ">
            <h5 className="text-lg">Classical </h5>
            <p className="text-sm">10 Songs | 5 Albums</p>
          </div>
        </div>
        <div
          style={{
            background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url('/assets/hiphop.jpg')`,
            backgroundPosition: 'left',
            backgroundSize: 'cover',
          }}
          className="col-span-2  rounded-2xl flex items-end p-5"
        >
          <div className="text-white font-semibold ">
            <h5 className="text-2xl">HipHop Music</h5>
            <p className="text-sm">10 Songs | 5 Albums</p>
          </div>
        </div>
        <div
          style={{
            background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url('/assets/solo-0.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
          className="row-span-2  rounded-2xl flex items-end p-5"
        >
          <div className="text-white font-semibold ">
            <h5 className="text-2xl">Solo Music</h5>
            <p className="text-sm">10 Songs | 5 Albums</p>
          </div>
        </div>
        <div
          style={{
            background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url('/assets/metal.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
          className="col-span-2  rounded-2xl flex items-end p-5"
        >
          <div className="text-white font-semibold ">
            <h5 className="text-2xl">Metal Music</h5>
            <p className="text-sm">10 Songs | 5 Albums</p>
          </div>
        </div>
        <div
          style={{
            background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url('/assets/romantic.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
          className="rounded-2xl flex items-end p-5"
        >
          <div className="text-white font-semibold ">
            <h5 className="text-lg">Romantic </h5>
            <p className="text-sm">10 Songs | 5 Albums</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopGenres;
