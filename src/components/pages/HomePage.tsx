import React from 'react';
import gearImg from '../../assets/images/gear.png';

export default function HomePage() {
  return (
    <div>
      <header className="bg-[#651FFF] w-full h-[48px] shadow-[0_7px_10px_rgba(0,0,0,0.2)] flex items-center justify-between px-[1.1%]">
        <div className="text-white font-ubuntu font-bold text-base">LOGO</div>
        <div className="w-[30px] h-[30px] border border-white/[0.3] flex justify-center items-center rounded-lg cursor-pointer">
          <img src={gearImg} alt="Gear" className="w-[16px] h-[16px]" />
        </div>
      </header>
      <aside />
    </div>
  );
}
