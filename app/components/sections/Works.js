import Image from 'next/image';

export default function Works() {
  return (
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
  );
}
