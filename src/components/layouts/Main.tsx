import React from 'react';
import './input/input.css';
import { Input, List } from './input';

export default function Main() {
  return (
    <main className="w-[calc(100%-149px)] ml-[149px] flex justify-center">
      <div className="w-[77.8%] border flex flex-col items-center">
        <div className="text-[32px] mt-[16px]">人口數、戶數按戶別及性別統計</div>

        <div className="mt-[48px] leading-[48px] w-full flex justify-center">
          <Input />
          <Input />
          <Input />
        </div>
        <div className="w-full flex justify-center">
          <List />
          <List />
          <List />
        </div>

        <div className="mt-[42px] leading-[32px] w-full border">
          123
        </div>
      </div>
    </main>
  );
}
