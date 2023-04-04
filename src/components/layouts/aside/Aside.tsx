import React from 'react';
import './aside.css';

export default function Aside() {
  return (
    <aside className="h-0 relative">
      <div className="absolute top-0 left-0 inline-block font-ubuntu font-bold text-[200px] leading-[149px] text-transparent bg-clip-text gradient-text translate-x-[149px] rotate-[90deg] origin-top-left">
        <span className="font-ubuntu tracking-taiwan">TAIWAN</span>
      </div>
    </aside>
  );
}
