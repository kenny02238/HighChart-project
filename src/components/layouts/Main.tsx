import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ListTest from './input/ListTest';
import InputTest from './input/InputTest';
import { yearData, countyData } from '../../constant/constant';
import { DropDownContext } from '../../store/contexts';
import BarChart from './barChart/BarChart';

export default function Main() {
  const { dropDownState } = useContext(DropDownContext);
  const { year, county, district } = useParams();
  const navigate = useNavigate();
  const handleSubmit = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(`/bigdata-pretest/${dropDownState.year}/${dropDownState.county}/${dropDownState.district}`);
  };
  const isDisableSubmit = dropDownState.district === '' || dropDownState.county === '' || dropDownState.district === '請先選擇縣/市' || dropDownState.county === '請選擇縣/市';
  return (
    <main className="w-[calc(100%-149px)] ml-[149px] flex justify-center">
      <div className="w-[77.8%] border flex flex-col items-center">
        <div className="text-[32px] mt-[16px]">人口數、戶數按戶別及性別統計</div>

        {/* 搜尋匡  */}
        <div className="mt-[48px] leading-[48px] w-full flex justify-center items-center">
          <div className="relative">
            <InputTest show="isYearShow" value="year" title="年份" />
            <ListTest lists={yearData} show="isYearShow" value="year" />
          </div>
          <div className="mx-[1.2%] relative">
            <InputTest show="isCountyShow" value="county" title="縣/市" />
            <ListTest lists={countyData} show="isCountyShow" value="county" />
          </div>
          <div className="mr-[1.2%] relative">
            <InputTest show="isDistrictShow" value="district" title="區" />
            {dropDownState.districtList && <ListTest lists={dropDownState.districtList} show="isDistrictShow" value="district" />}
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isDisableSubmit}
            className={`border flex justify-center items-center bg-black/[0.12] w-[83px] h-[36.5px] rounded ${isDisableSubmit && 'cursor-not-allowed'}`}
          >
            <div className="font-ubuntu font-bold text-[14px] text-[#00000042]/[0.26]">Submit</div>
          </button>
        </div>
        {/* 搜尋結果 */}
        <div className="mt-[42px] leading-[32px] w-full relative h-[32px] flex justify-center items-center">
          <div className="w-full border-[#C29FFF] border-[0.5px]" />
          <div className="absolute bg-white w-[98px] flex justify-center items-center">
            <div className="text-[13px] px-[13px] text-[#B388FF] border border-[#B388FF] rounded-2xl">
              搜尋結果
            </div>
          </div>
        </div>
        {year && county && district && (
          <div className="w-full flex flex-col items-center">
            <div className="text-[25px] font-normal mt-[42px] font-sans">{`${year} ${county} ${district}`}</div>
            <div className="mt-[48px] w-full">
              <BarChart />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
