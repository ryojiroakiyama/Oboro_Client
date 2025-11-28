import BackButton from '../ui/BackButton';

export default function Contact({ onBack }) {
  return (
    <>
      <BackButton onClick={onBack} />
      <div className="text-center">
        <p className="font-playfair text-5xl font-normal text-oboro-green">
          xxx
        </p>
      </div>
    </>
  );
}

