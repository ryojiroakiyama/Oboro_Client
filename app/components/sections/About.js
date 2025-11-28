import BackButton from '../ui/BackButton';

export default function About({ onBack }) {
  return (
    <>
      <BackButton onClick={onBack} />
      <div className="text-center">
        <p className="font-playfair text-5xl font-normal text-oboro-green">
          design by nature
        </p>
      </div>
    </>
  );
}

