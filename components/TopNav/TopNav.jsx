import React from 'react';

const TopNav = () => {
  return (
    <div className="navbar bg-primary rounded-lg text-white">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search For Your Favorite Tracks"
          className="pl-8 w-full bg-transparent placeholder:text-white outline-none border-none ring-0"
        />
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/assets/user.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black/30 backdrop-blur-md rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
