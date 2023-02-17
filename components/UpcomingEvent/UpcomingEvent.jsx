import React from 'react';
import UpcomingCard from '../UpcomingCard/UpcomingCard';

const UpcomingEvent = () => {
  return (
    <section className="">
      <div className="flex items-center justify-between px-3">
        <h2 className="text-white font-bold text-4xl pb-5">
          Upcoming<span className="text-primary"> Events</span>
        </h2>
        <p className="text-primary font-semibold border-b border-primary cursor-pointer">
          Explore More
        </p>
      </div>

      <div className="w-full grid grid-cols-2 gap-2">
        <UpcomingCard></UpcomingCard>
        <UpcomingCard></UpcomingCard>
      </div>
    </section>
  );
};

export default UpcomingEvent;
