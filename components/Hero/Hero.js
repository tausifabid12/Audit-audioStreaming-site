import React from 'react';
import Search from '../Search/Search';
import TopNav from '../TopNav/TopNav';

const Hero = ({ img }) => {
  return (
    <section
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
      <div className="px-5 pt-5">
        <TopNav />
      </div>

      <div className="w-full h-full">
        <div className="w-[90%] h-full flex flex-col space-y-8 items-start pt-36 px-8">
          <h1 className="text-white text-6xl font-extrabold font-GreateVibes ">
            ENJOY BEST MUSIC
          </h1>
          <h1 className="text-white text-5xl font-extrabold font-GreateVibes ">
            WITH AUDIT
          </h1>
          {/* <img src="/assets/name-bottom.png" className="w-[70%] h-7" alt="" /> */}
          <button className="text-white font-semibold px-8 py-2 border-2 border-white rounded-md">
            Explore
          </button>
        </div>
      </div>
      <div className="h-56 w-full absolute bottom-0 bg-gradient-to-t from-[#121217] to-transparent "></div>
    </section>
  );
};

export default Hero;
