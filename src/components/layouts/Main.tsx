import React, { useContext } from 'react';
// import { Input } from './input';
import ListTest from './input/ListTest';
import InputTest from './input/InputTest';
import { year, county } from '../../constant/constant';
import { DropDownContext } from '../../store/contexts';

export default function Main() {
  const { dropDownState } = useContext(DropDownContext);
  const handleSubmit = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(11);
    // const encodedCounty = encodeURIComponent(dropDownState.county);
    // const res = await fetch(`https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/${dropDownState.year}?COUNTY=${encodedCounty}`);
    // const response = await res.json();
  };
  const isDisableSubmit = dropDownState.district === '' || dropDownState.county === '' || dropDownState.district === '請先選擇縣/市' || dropDownState.county === '請選擇縣/市';
  return (
    <main className="w-[calc(100%-149px)] ml-[149px] flex justify-center">
      <div className="w-[77.8%] border flex flex-col items-center">
        <div className="text-[32px] mt-[16px]">人口數、戶數按戶別及性別統計</div>

        <div className="mt-[48px] leading-[48px] w-full flex justify-center items-center">
          <div>
            <InputTest show="isYearShow" value="year" title="年份" />
            <ListTest lists={year} show="isYearShow" value="year" />
          </div>
          <div>
            <InputTest show="isCountyShow" value="county" title="縣/市" />
            <ListTest lists={county} show="isCountyShow" value="county" />
          </div>
          <div>
            <InputTest show="isDistrictShow" value="district" title="區" />
            {dropDownState.districtList && <ListTest lists={dropDownState.districtList} show="isDistrictShow" value="district" />}
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isDisableSubmit}
            className={`border flex justify-center items-center bg-black/[0.12] w-[83px] rounded ${isDisableSubmit && 'cursor-not-allowed'}`}
          >
            <div className="font-ubuntu font-bold text-[14px] text-[#00000042]/[0.26]">Submit</div>
          </button>
        </div>
        <div className="w-full flex justify-center" />
        <div className="mt-[42px] leading-[32px] w-full border">
          123
        </div>
      </div>
    </main>
  );
}
