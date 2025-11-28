export default function BackButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed top-8 left-8 font-playfair text-2xl text-oboro-green hover:opacity-70 transition-opacity"
    >
      ←
    </button>
  );
}

