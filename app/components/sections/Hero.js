'use client';

import { useState } from 'react';
import Logo from '../ui/Logo';
import Menu from './Menu';
import About from './About';
import Works from './Works';
import Contact from './Contact';

export default function Hero() {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleClick = () => {
    if (selectedMenu === null) {
      setSelectedMenu('menu');
    }
  };

  const handleSelectMenu = (menuId) => {
    setSelectedMenu(menuId);
  };

  const handleBack = (e) => {
    e.stopPropagation();
    setSelectedMenu('menu');
  };

  const renderContent = () => {
    const content = (() => {
      switch (selectedMenu) {
        case 'menu':
          return <Menu onSelectMenu={handleSelectMenu} />;
        case 'about':
          return <About onBack={handleBack} />;
        case 'works':
          return <Works onBack={handleBack} />;
        case 'contact':
          return <Contact onBack={handleBack} />;
        default:
          return <Logo />;
      }
    })();

    return (
      <div key={selectedMenu} className="fade-in">
        {content}
      </div>
    );
  };

  return (
    <section 
      className="w-screen h-screen bg-oboro-pink flex justify-center items-center cursor-pointer"
      onClick={handleClick}
    >
      {renderContent()}
    </section>
  );
}

