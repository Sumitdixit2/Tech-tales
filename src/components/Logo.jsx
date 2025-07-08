import React from 'react';

function Logo({ fill = 'black', className = 'text-white' }) {
  return (
    <div className="flex items-center gap-4 text-white">
      <div className="size-4">
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill={fill}></path>
        </svg>
      </div>
      <h2 className={`text-lg font-bold leading-tight tracking-[-0.015em] ${className}`}>
        Tech Tales
      </h2>
    </div>
  );
}

export default Logo;
