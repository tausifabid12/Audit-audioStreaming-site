import React from 'react';
import TopNav from '../TopNav/TopNav';

const PageTop = () => {
  return (
    <section
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(${'/assets/bg-01.jpg'})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="h-[400px] w-full relative"
    >
      <div className="px-5 pt-5 ">
        <TopNav />
      </div>

      <div className="h-56 w-full absolute bottom-0 bg-gradient-to-t from-[#13131a] to-transparent "></div>
    </section>
  );
};

export default PageTop;
