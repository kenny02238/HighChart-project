import React from 'react';
import { Header, Aside, Main } from '../layouts';

export default function HomePage() {
  return (
    <div className="font-sans">
      <Header />
      <div className="mt-[8px] relative">
        <div className="absolute top-0 left-0 -z-10">
          <Aside />
        </div>
        <Main />
      </div>
    </div>
  );
}
