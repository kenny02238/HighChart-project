import React, { useContext } from 'react';
import arrowDropDown from '../../../assets/images/arrow_drop_down.png';
import { DropDownContext } from '../../../store/contexts';

export default function Input() {
  const { dropDownState, dropDownDispatch } = useContext(DropDownContext);
  const handleYearInput = () => {
    dropDownDispatch({ type: 'isYearShow' });
  };
  return (
    <div
      className={`border rounded-[4px] w-[7.27%] relative border-[#B6B6B6] flex justify-center flex-wrap items-center cursor-pointer ${dropDownState.isYearShow && ' border-sky-600 border-[2px] border-b-0 rounded-b-[0px]'} `}
      onClick={handleYearInput}
    >
      <div className={`absolute w-[30px] h-[10px] bg-white text-[12px] flex justify-center items-center text-[#b6b6b6] -top-[5px] left-[11px] ${dropDownState.isYearShow && 'text-sky-600'}`}>年份</div>
      <div>{dropDownState.year}</div>
      <img src={arrowDropDown} alt="Gear" className={`w-[24px] h-[24px] ${dropDownState.isYearShow && 'rotate-[180deg]'}`} />
    </div>
  );
}
