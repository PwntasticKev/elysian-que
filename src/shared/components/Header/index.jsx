// import React, { useState } from 'react';
import { headerData } from "./headerData";
import { FaMoon, FaRegMoon } from "react-icons/fa";

function Header(props) {
  return (
    <header className="flex items-center justify-between py-6 xl:px-0">
      <img
        src="https://drumteacherutah-wpengine.netdna-ssl.com/wp-content/uploads/mike_dale_yellow-logo-small-fixed.png"
        alt="Drum"
      />
      <nav className="hidden lg:flex items-center justify-between">
        {headerData.map((item, index) => (
          <a
            className="ease-in-out duration-300 hover:text-primary m-5 uppercase text-sm font-bold"
            key={index}
            href={item.link}
          >
            {item.text}
          </a>
        ))}
      </nav>

      <button onClick={() => props.changeTheme()}>
        {props.theme ? <FaMoon /> : <FaRegMoon />}
      </button>
      <button className="border-2 border-orange-400 p-3 rounded-xl font-bold">
        Call 801-943-2621
      </button>
    </header>
  );
}

export default Header;
