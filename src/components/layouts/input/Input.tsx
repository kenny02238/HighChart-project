import React, { useContext } from 'react';
import './input.css';
import arrowDropDown from '../../../assets/images/arrow_drop_down.png';
import { DropDownContext } from '../../../store/contexts';

export default function Input() {
  const { dropDownState, dropDownDispatch } = useContext(DropDownContext);
  const handleYearInput = () => {
    dropDownDispatch({ type: 'year', payload: { value: !dropDownState.year } });
  };
  return (
    <div
      className={`border rounded-[4px] w-[7.27%] border-container relative border-[#B6B6B6] flex justify-center flex-wrap items-center cursor-pointer ${dropDownState.year && 'border-[#651FFF] border-[2px] border-b-0 rounded-b-[0px]'} `}
      onClick={handleYearInput}
    >
      <div>100</div>
      <img src={arrowDropDown} alt="Gear" className="w-[24px] h-[24px]" />
    </div>
  );
}
