import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const BestPlayList = () => {
  const playListRef = useRef(null);
  const isInView = useInView(playListRef);
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.2,
      },
    },
  };

  const animatePlayList = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };

  const playList = [
    {
      id: 1,
      name: 'Dj Remix',
      total: 20,
      favorite: 8,
      img: '/assets/playList1.jpg',
    },
    {
      id: 2,
      name: 'Rock',
      total: 15,
      favorite: 9,
      img: '/assets/playList2.jpg',
    },
    {
      id: 3,
      name: 'Metal Guru',
      total: 10,
      favorite: 10,
      img: '/assets/playList3.jpg',
    },
    {
      id: 4,
      name: 'Awesome Solo',
      total: 30,
      favorite: 10,
      img: '/assets/playList4.jpg',
    },
  ];
  return (
    <section className="my-10 px-8">
      <h2 className="text-white font-bold text-4xl pb-8">
        Best <span className="text-primary">PlayList</span>
      </h2>
      <motion.div
        ref={playListRef}
        variants={container}
        animate={isInView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 lg:grid-cols-4 gap-4"
      >
        {playList.map((p) => (
          <motion.div
            variants={animatePlayList}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
            key={p.id}
            className="w-full bg-transparent"
          >
            <div className="w-full h-full rounded-xl relative">
              <img src={p.img} className="rounded-xl" alt="Shoes" />
              <div className="absolute bottom-0 flex w-full place-items-end p-5  h-full  bg-gradient-to-t from-black to-transparent rounded-xl">
                <div className="text-white ">
                  <h2 className="text-lg font-semibold">{p.name}</h2>
                  <p>
                    {p.total} songs | {p.favorite} favorites
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default BestPlayList;
