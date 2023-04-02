import React, { useContext } from 'react';
import { DropDownContext } from '../../../store/contexts';

export default function List() {
  const { dropDownState } = useContext(DropDownContext);

  return (
    <div className={`w-[7.27%] h-[258px]  ${dropDownState.year || 'hidden'} -mt-[2px] z-10 overflow-scroll shadow-[0px_4px_2px_rgba(0,0,0,0.25)]`}>
      <div className="hover:bg-slate-200 w-full px-4 py-[6px] flex justify-center items-center">100</div>
      <div className="hover:bg-slate-200 w-full px-4 py-[6px] flex justify-center items-center">100</div>
      <div className="hover:bg-slate-200 w-full px-4 py-[6px] flex justify-center items-center">100</div>
      <div className="hover:bg-slate-200 w-full px-4 py-[6px] flex justify-center items-center">100</div>
      <div className="hover:bg-slate-200 w-full px-4 py-[6px] flex justify-center items-center">100</div>
      <div className="hover:bg-slate-200 w-full px-4 py-[6px] flex justify-center items-center">100</div>
      <div className="hover:bg-slate-200 w-full px-4 py-[6px] flex justify-center items-center">100</div>
      <div className="hover:bg-slate-200 w-full px-4 py-[6px] flex justify-center items-center">100</div>
      <div className="hover:bg-slate-200 w-full px-4 py-[6px] flex justify-center items-center">100</div>
      <div className="hover:bg-slate-200 w-full px-4 py-[6px] flex justify-center items-center">100</div>
    </div>
  );
}
