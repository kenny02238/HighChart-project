import React, {
  useContext, MouseEventHandler, useCallback, useRef,
} from 'react';
import arrowDropDown from '../../../assets/images/arrow_drop_down.png';
import cross from '../../../assets/images/cross.png';
import { DropDownContext } from '../../../store/contexts';
import { countyData } from '../../../constant/constant';
import { upDateDropDownShow, upDateDropDownData, upDateDropDownAllShow } from '../../../store/actions/dropDownAction';

type Props = {
  show:string;
  value:string;
  title:string;
};
export default function Input({ show, value, title }:Props) {
  const { dropDownState, dropDownDispatch } = useContext(DropDownContext);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDropDownBtn:MouseEventHandler<HTMLButtonElement> = () => {
    if (!dropDownState[show]) { dropDownDispatch({ type: value, payload: { value: '' } }); }
    dropDownDispatch(upDateDropDownShow(show, !dropDownState[show]));
  };

  const handleCross = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    dropDownDispatch(upDateDropDownData(value, ''));
    if (value === 'county') {
      dropDownDispatch(upDateDropDownData('district', ''));
    }
    dropDownDispatch(upDateDropDownAllShow('closeAllShow'));
  }, [dropDownDispatch, value]);

  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    dropDownDispatch(upDateDropDownData(value, event.target.value));
  };

  const clearInit = useCallback(() => {
    if (dropDownState[value] === '請選擇縣/市' || dropDownState[value] === '請先選擇縣/市') {
      dropDownDispatch(upDateDropDownData(value, ''));
    }
    dropDownDispatch(upDateDropDownShow(show, true));
  }, [dropDownDispatch, value, show]);

  const handleBlurInput = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    if (dropDownState[show] && !containerRef.current?.contains(e.relatedTarget as Node)) {
      dropDownDispatch(upDateDropDownShow(show, false));
    }
    if (value === 'county' && !countyData.includes(dropDownState.county)) {
      // 暫時用aleat提醒使用者
      alert('請正確選擇縣/市');
      dropDownDispatch(upDateDropDownData('county', ''));
    }
    if (value === 'district' && dropDownState.districtList && !dropDownState.districtList.includes(dropDownState.district)) {
      // 暫時用aleat提醒使用者
      alert('請正確選擇區');
      dropDownDispatch(upDateDropDownData('district', ''));
    }
  }, [dropDownState, dropDownDispatch, show]);

  const handleBlurContainer = useCallback((event: React.FocusEvent<HTMLDivElement>) => {
    if (!containerRef.current?.contains(event.relatedTarget as Node)) {
      dropDownDispatch(upDateDropDownShow(show, false));
    }
  }, [containerRef, dropDownDispatch, show]);

  const isShowCross = value !== 'year'
    && dropDownState[value] !== '請選擇縣/市'
    && dropDownState[value] !== '請先選擇縣/市'
    && dropDownState[value] !== '';

  const isInputInit = dropDownState[value] === '請選擇縣/市'
  || dropDownState[value] === '請先選擇縣/市';

  const validDistrict = (value !== 'year' && value !== 'county')
  && (dropDownState.county === '' || dropDownState.county === '請選擇縣/市' || dropDownState.county === '');

  const inputDisable = (value !== 'year' && value !== 'county')
  && (dropDownState.county === '' || dropDownState.county === '請選擇縣/市');
  return (
    <div
      className={`border rounded-[4px] ${value === 'year' ? 'w-[73px]' : 'w-[165px]'} 
      h-[40px] relative border-[#B6B6B6] flex flex-wrap items-center  bg-white
      ${dropDownState[show] && ' border-sky-600 border-[2px]'} ${value === 'year' || 'sm:w-full'}`}
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
        ${isInputInit ? 'text-[#b6b6b6]' : 'text-[#333333]'} ${inputDisable && 'cursor-not-allowed'} sm:w-[75%]`}
        onChange={handleInputChange}
        onClick={clearInit}
        onBlur={handleBlurInput}
        value={dropDownState[value]}
        type="text"
        disabled={inputDisable}
      />
      {isShowCross && (
      <div onClick={handleCross}>
        <img
          src={cross}
          alt="Cross"
          className={`w-[12px] h-[12px] absolute right-[24.24%] cursor-pointer ${dropDownState[show] ? 'top-[13px]' : 'top-[14px]'} sm:right-[12%]`}
        />
      </div>
      )}
      <button
        onClick={handleDropDownBtn}
        type="button"
        disabled={inputDisable}
      >
        <img
          src={arrowDropDown}
          alt="Gear"
          className={`w-[24px] h-[24px] absolute right-[3.6%]
          ${dropDownState[show] && 'rotate-[180deg]'} ${value === 'year' && 'right-[8.21%]'} 
          ${dropDownState[show] ? 'top-[6px]' : 'top-[8px]'} ${inputDisable && 'cursor-not-allowed'}`}
        />
      </button>
    </div>
  );
}
