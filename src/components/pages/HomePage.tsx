import React from 'react';
import { Header, Aside, Main } from '../layouts';

export default function HomePage() {
  return (
    <div className="font-sans">
      <Header />
      <div className="mt-[8px]">
        <Aside />
        <Main />
      </div>
    </div>
  );
}
