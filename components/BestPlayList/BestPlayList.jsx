import React from 'react';

const BestPlayList = () => {
  const playList = [
    {
      id: 1,
      name: 'Dj Remix',
      total: 20,
      favorite: 8,
    },
    {
      id: 2,
      name: 'Rock',
      total: 15,
      favorite: 9,
    },
    {
      id: 3,
      name: 'Metal Guru',
      total: 10,
      favorite: 10,
    },
    {
      id: 4,
      name: 'Awesome Solo',
      total: 30,
      favorite: 10,
    },
    {
      id: 5,
      name: 'Romantic',
      total: 22,
      favorite: 10,
    },
  ];
  return (
    <section className="my-10 px-8">
      <h2 className="text-white font-bold text-4xl pb-8">
        Best <span className="text-primary">PlayList</span>
      </h2>
      <div className="grid grid-cols-5 gap-4">
        {playList.map((p) => (
          <div key={p.id} className="w-full bg-transparent">
            <div className="w-full h-full rounded-xl relative">
              <img src="/assets/2.jpg" className="rounded-xl" alt="Shoes" />
              <div className="absolute bottom-0 flex w-full place-items-end p-5  h-full  bg-gradient-to-t from-black to-transparent rounded-xl">
                <div className="text-white ">
                  <h2 className="text-lg font-semibold">{p.name}</h2>
                  <p>
                    {p.total} songs | {p.favorite} favorites
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestPlayList;
