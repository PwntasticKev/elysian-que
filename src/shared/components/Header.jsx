// import React, { useState } from 'react';
import { headerData } from './headerData'
function Header() {
	return (
		<header className='flex items-center justify-between px-2'>
			<img src="https://drumteacherutah-wpengine.netdna-ssl.com/wp-content/uploads/mike_dale_yellow-logo-small-fixed.png" alt="Drum" />
			<nav className="flex items-center justify-between text-md">
			{ headerData.map((item, index) => (
				<a className="ease-in-out duration-300 hover:text-primary" key={index} href={item.link}>{item.text}</a>
			))}
			</nav>
			<button className='border-solid p-3 border-primary-300'>Call 801-943-2621</button>
		</header>
	)
}

export default Header