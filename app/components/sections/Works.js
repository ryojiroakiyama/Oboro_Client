import BackButton from '../ui/BackButton';

export default function Works({ onBack }) {
  return (
    <>
      <BackButton onClick={onBack} />
      <div className="text-center">
        <svg 
          width="200" 
          height="200" 
          viewBox="0 0 200 200" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto"
        >
          {/* 茎 */}
          <path 
            d="M100 180 L100 80" 
            stroke="#4A5B31" 
            strokeWidth="4"
          />
          
          {/* 葉っぱ1 */}
          <ellipse 
            cx="70" 
            cy="120" 
            rx="25" 
            ry="15" 
            fill="#4A5B31" 
            transform="rotate(-30 70 120)"
          />
          
          {/* 葉っぱ2 */}
          <ellipse 
            cx="130" 
            cy="100" 
            rx="25" 
            ry="15" 
            fill="#4A5B31" 
            transform="rotate(30 130 100)"
          />
          
          {/* 花 */}
          <circle cx="100" cy="60" r="20" fill="#F3DBD7"/>
          <circle cx="85" cy="65" r="15" fill="#F3DBD7"/>
          <circle cx="115" cy="65" r="15" fill="#F3DBD7"/>
          <circle cx="90" cy="80" r="15" fill="#F3DBD7"/>
          <circle cx="110" cy="80" r="15" fill="#F3DBD7"/>
          
          {/* 花の中心 */}
          <circle cx="100" cy="70" r="10" fill="#4A5B31"/>
        </svg>
      </div>
    </>
  );
}

