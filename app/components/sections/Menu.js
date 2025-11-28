export default function Menu() {
  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'works', label: 'Works' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="flex gap-12 items-center">
      {menuItems.map((item) => (
        <button
          key={item.id}
          className="font-playfair text-4xl font-normal text-oboro-green hover:opacity-70 transition-opacity"
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}

