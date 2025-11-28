import Image from 'next/image';
import BackButton from '../ui/BackButton';

export default function Works({ onBack }) {
  return (
    <>
      <BackButton onClick={onBack} />
      <div className="text-center">
        <Image
          src="/images/bonsai.jpg"
          alt="Bonsai"
          width={400}
          height={400}
          className="rounded-lg shadow-lg"
          priority
        />
      </div>
    </>
  );
}

