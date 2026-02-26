export default function BackButton({
  onClick,
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-12 left-1/2 -translate-x-1/2 font-playfair text-3xl text-oboro-green hover:opacity-70 transition-opacity p-4"
    >
      undo
    </button>
  );
}
