import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Contexts/AuthProvider/AuthProvider';
import { BiSearchAlt } from 'react-icons/bi';
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { useMusicData } from '../../Contexts/MusicProvider/MusicProvider';
import SearchShowBox from '../SearchShowBox/SearchShowBox';
import { FaTimesCircle } from 'react-icons/fa';

const TopNav = () => {
  const { user, loading, logOut } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  // getting song info from global state
  const { state } = useMusicData();

  useEffect(() => {
    if (searchTerm) {
      setIsSearched(true);
      setFilteredData(
        state?.songData.filter((item) =>
          item?.songName.toLowerCase().includes(searchTerm)
        )
      );
    } else {
      setIsSearched(false);
      setFilteredData([]);
    }
  }, [searchTerm]);

  if (loading) {
    return loading;
  }

  console.log(filteredData);

  return (
    <>
      <div className="navbar bg-black/20 backdrop-blur-sm text-white h-[72px] relative">
        <div className="flex-1">
          <label
            htmlFor="my-drawer-2"
            className="text-white drawer-button lg:hidden"
          >
            <AiOutlineMenuFold size={25} />
          </label>
          <div className="ml-5 hidden md:flex   items-center bg-white/10 rounded-lg ppx-5">
            <span className={`text-white/80 ml-5 mr-2`}>
              <BiSearchAlt size={23} />
            </span>
            <input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
              placeholder="Search For Your Favorite Tracks"
              className="w-72 h-10 bg-transparent  placeholder:text-white/80 outline-none border-none ring-0"
            />
            <span
              onClick={() => setIsSearched(!isSearched)}
              className={`${
                isSearched ? 'block' : 'hidden'
              } text-white/80 mr-2 cursor-pointer`}
            >
              <FaTimesCircle size={25} />
            </span>
          </div>
          {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
        </div>
        <div className="flex-none lg:pr-5">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          <div className="dropdown dropdown-end ">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full bg-primary">
                <img src="/assets/avatar.png" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black/40 backdrop-blur-lg rounded-box w-52"
            >
              {user?.uid ? (
                <>
                  <li>
                    <Link href="/">Profile</Link>
                  </li>
                  <li>
                    <button onClick={logOut}>Log out</button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href="/login">Sing In</Link>
                  </li>
                  <li>
                    <Link href="/signup">Sing Up</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>

      <SearchShowBox filteredData={filteredData} isSearched={isSearched} />
    </>
  );
};

export default TopNav;
