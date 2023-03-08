import React from 'react';
import SearchCard from '../SearchCard/SearchCard';

const SearchShowBox = ({ filteredData, isSearched }) => {
  return (
    <div
      className={`${
        isSearched ? 'absolute' : 'hidden'
      } w-[90%] min-h-[410px]  bg-black/40 backdrop-blur-sm absolute top-[72px] rounded-md p-8`}
    >
      <div className="grid grid-cols-3 gap-3">
        {filteredData.length ? (
          filteredData.map((item) => <SearchCard key={item?._id} data={item} />)
        ) : (
          <h1 className="text-3xl font-bold text-center text-white">
            No Song Found !!
          </h1>
        )}
      </div>
    </div>
  );
};

export default SearchShowBox;
