import React, { useContext } from 'react';
import { DropDownContext } from '../../../store/contexts';

export default function List() {
  const { dropDownState, dropDownDispatch } = useContext(DropDownContext);
  // eslint-disable-next-line max-len
  const handleList:React.MouseEventHandler<HTMLButtonElement> = (e:React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLElement;
    dropDownDispatch({ type: 'year', payload: { value: target.textContent } });
    dropDownDispatch({ type: 'isYearShow' });
  };
  return (
    <div className={`w-[7.27%] h-[258px]  ${dropDownState.isYearShow || 'invisible'} -mt-[2px] z-10 overflow-scroll shadow-[0px_4px_2px_rgba(0,0,0,0.25)] cursor-pointer`}>
      <button type="button" className="hover:bg-slate-200 w-full px-4 py-[6px] flex justify-center items-center" onClick={handleList}>106</button>
      <button type="button" className="hover:bg-slate-200 w-full px-4 py-[6px] flex justify-center items-center" onClick={handleList}>107</button>
      <button type="button" className="hover:bg-slate-200 w-full px-4 py-[6px] flex justify-center items-center" onClick={handleList}>108</button>
      <button type="button" className="hover:bg-slate-200 w-full px-4 py-[6px] flex justify-center items-center" onClick={handleList}>109</button>
      <button type="button" className="hover:bg-slate-200 w-full px-4 py-[6px] flex justify-center items-center" onClick={handleList}>110</button>
      <button type="button" className="hover:bg-slate-200 w-full px-4 py-[6px] flex justify-center items-center" onClick={handleList}>111</button>
    </div>
  );
}
