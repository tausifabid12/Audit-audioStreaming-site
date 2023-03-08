import React from 'react';
import { motion, AnimatePresence, useViewportScroll } from 'framer-motion';
import TopNav from '../TopNav/TopNav';

const Hero = ({ img }) => {
  return (
    <AnimatePresence>
      <div className=" h-auto lg:h-[630px] overflow-hidden">
        <motion.section
          animate={{ height: [0, 630] }}
          transition={{ duration: 0.6 }}
          style={{
            background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${
              img ? img : '/assets/bg-01.jpg'
            })`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          className="h-[630px] w-full relative"
        >
          {/* <Search /> */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 40, delay: 0.8 }}
            exit={{ opacity: 0, y: -50 }}
            className="px-0 pt-0"
          >
            <TopNav />
          </motion.div>

          <div className="w-full h-full">
            <div className="w-full lg:w-[90%] h-full flex flex-col space-y-8 items-start pt-36 px-4 lg:px-8">
              <motion.h1
                initial={{ opacity: 0, x: -150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 40, delay: 0.6 }}
                exit={{ opacity: 0, x: -150 }}
                className="text-white text-5xl lg:text-6xl text-center lg:text-left font-extrabold font-GreateVibes "
              >
                ENJOY BEST MUSIC
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 40, delay: 0.6 }}
                exit={{ opacity: 0, x: 150 }}
                className="hidden md:block text-white text-4xl lg:text-5xl text-center lg:text-left font-extrabold font-GreateVibes "
              >
                WITH AUDIT
              </motion.h1>
              <motion.div animate={{ opacity: [0, 1] }} className="w-[30%]">
                <img
                  src="/assets/name-bottom.png"
                  className="w-full h-7 hidden lg:block"
                  alt=""
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 40, delay: 0.6 }}
                exit={{ opacity: 0, y: 150 }}
                className="text-white font-semibold px-8 py-2 border-2 mx-auto md:mx-0 border-white rounded-md"
              >
                Explore
              </motion.button>
            </div>
          </div>
          <div className="h-56 w-full absolute bottom-0 bg-gradient-to-t from-[#121217] to-transparent "></div>
        </motion.section>
      </div>
    </AnimatePresence>
  );
};

export default Hero;
