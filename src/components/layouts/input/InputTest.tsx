import React, {
  useContext, MouseEventHandler, useCallback, useRef,
} from 'react';
import arrowDropDown from '../../../assets/images/arrow_drop_down.png';
import cross from '../../../assets/images/cross.png';
import { DropDownContext } from '../../../store/contexts';

type Props = {
  show:string;
  value:string;
  title:string;
};
export default function InputTest({ show, value, title }:Props) {
  const { dropDownState, dropDownDispatch } = useContext(DropDownContext);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleInput:MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    dropDownDispatch({ type: show, payload: { value: !dropDownState[show] } });
  }, [dropDownDispatch, dropDownState[show], show]);

  const handleCross = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    dropDownDispatch({ type: value, payload: { value: '' } });
    if (value === 'county') {
      dropDownDispatch({ type: 'district', payload: { value: '' } });
    }
    dropDownDispatch({ type: 'closeAllShow' });
  }, [dropDownDispatch, value]);

  const handleInputChange = useCallback((event:React.ChangeEvent<HTMLInputElement>) => {
    dropDownDispatch({ type: value, payload: { value: event.target.value } });
  }, [dropDownDispatch, value]);
  const clearInit = useCallback(() => {
    if (dropDownState[value] === '請選擇縣/市' || dropDownState[value] === '請先選擇縣/市') {
      dropDownDispatch({ type: value, payload: { value: '' } });
    }
    dropDownDispatch({ type: show, payload: { value: true } });
  }, [dropDownDispatch, value, show]);
  const handleBlurInput = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    if (dropDownState[show] && !containerRef.current?.contains(e.relatedTarget as Node)) {
      dropDownDispatch({ type: show, payload: { value: false } });
    }
  }, [dropDownState, dropDownDispatch, show]);
  const handleBlurContainer = useCallback((event: React.FocusEvent<HTMLDivElement>) => {
    if (!containerRef.current?.contains(event.relatedTarget as Node)) {
      dropDownDispatch({ type: show, payload: { value: false } });
    }
  }, [containerRef, dropDownDispatch, show]);
  const isShowCross = value !== 'year' && dropDownState[value] !== '請選擇縣/市' && dropDownState[value] !== '請先選擇縣/市' && dropDownState[value] !== '';
  const isInputInit = dropDownState[value] === '請選擇縣/市' || dropDownState[value] === '請先選擇縣/市';
  const validDistrict = (value !== 'year' && value !== 'county') && (dropDownState.county === '' || dropDownState.county === '請選擇縣/市' || dropDownState.county === '');
  return (
    <div
      className={`border rounded-[4px] ${value === 'year' ? 'w-[73px]' : 'w-[165px]'} 
      h-[40px] relative border-[#B6B6B6] flex flex-wrap items-center 
      ${dropDownState[show] && ' border-sky-600 border-[2px]'}`}
      ref={containerRef}
      onBlur={handleBlurContainer}
    >
      <div className={`absolute w-[30px] h-[10px] bg-white text-[12px] 
      flex justify-center items-center left-[11px] 
      ${validDistrict ? 'text-[#b6b6b6]' : ''} 
      ${dropDownState[show] ? '-top-[6.5px] text-sky-600' : '-top-[5px]'} 
      ${!validDistrict && !dropDownState[show] ? 'text-[#333333]' : ''}`}
      >
        {title}
      </div>
      <input
        className={`w-[65%] h-full outline-none flex items-center ml-[16px] bg-white text-[16px] 
        ${isInputInit ? 'text-[#b6b6b6]' : 'text-[#333333]'} `}
        onChange={handleInputChange}
        onClick={clearInit}
        onBlur={handleBlurInput}
        value={dropDownState[value]}
        type="text"
        disabled={(value !== 'year' && value !== 'county') && (dropDownState.county === '' || dropDownState.county === '請選擇縣/市')}
      />
      {isShowCross && (
      <div onClick={handleCross}>
        <img
          src={cross}
          alt="Cross"
          className={`w-[12px] h-[12px] absolute right-[24.24%] cursor-pointer ${dropDownState[show] ? 'top-[13px]' : 'top-[14px]'}`}
        />
      </div>
      )}
      <button
        onClick={handleInput}
        type="button"
        disabled={(value !== 'year' && value !== 'county') && (dropDownState.county === '' || dropDownState.county === '請選擇縣/市')}
      >
        <img
          src={arrowDropDown}
          alt="Gear"
          className={`w-[24px] h-[24px] absolute right-[3.6%]
          ${dropDownState[show] && 'rotate-[180deg]'} ${value === 'year' && 'right-[8.21%]'} 
          ${dropDownState[show] ? 'top-[6px]' : 'top-[8px]'}`}
        />
      </button>
    </div>
  );
}
