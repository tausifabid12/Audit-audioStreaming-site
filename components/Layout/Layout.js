import Link from 'next/link';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Player from '../Player/Player';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          {children}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-64 bg-black/30 backdrop-blur-md text-white font-semibold">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a>All Songs</a>
            </li>
            <li>
              <a>Artists</a>
            </li>
            <li>
              <a>Albums</a>
            </li>
            <li>
              <Link href="/upload-songs">Upload Song</Link>
            </li>
          </ul>
        </div>
      </div>
      <Player />
    </div>
  );
};

export default Layout;
