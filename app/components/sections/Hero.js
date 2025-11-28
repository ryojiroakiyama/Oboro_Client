'use client';

import { useState } from 'react';
import Logo from '../ui/Logo';
import Menu from './Menu';

export default function Hero() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(true);
  };

  return (
    <section 
      className="w-screen h-screen bg-oboro-pink flex justify-center items-center cursor-pointer"
      onClick={handleClick}
    >
      {showMenu ? <Menu /> : <Logo />}
    </section>
  );
}

