import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import List from './input/List';
import Input from './input/Input';
import { yearData, countyData } from '../../constant/constant';
import { DropDownContext } from '../../store/contexts';
import BarChart from './barChart/BarChart';
import PieChart from './barChart/PieChart';

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
    <main className="w-[calc(100%-149px)] md:w-full md:ml-0 ml-[149px] flex justify-center">
      <div className="w-[77.8%] min-w-[522px] flex flex-col items-center sm:min-w-0 sm:w-full sm:px-[9px]">
        <div className="text-[32px] mt-[16px] md:text-[25px]">人口數、戶數按戶別及性別統計</div>

        {/* 搜尋匡  */}
        <div className="mt-[48px] leading-[48px] w-full flex justify-center items-center flex-wrap md:mt-[30px] sm:justify-start">
          <div className="relative grow-0">
            <Input show="isYearShow" value="year" title="年份" />
            <List lists={yearData} show="isYearShow" value="year" />
          </div>
          <div className="mx-[1.2%] relative sm:w-full sm:mt-[16px] sm:mx-0">
            <Input show="isCountyShow" value="county" title="縣/市" />
            <List lists={countyData} show="isCountyShow" value="county" />
          </div>
          <div className="mr-[1.2%] relative sm:w-full sm:mt-[16px] sm:mr-0">
            <Input show="isDistrictShow" value="district" title="區" />
            {dropDownState.districtList && <List lists={dropDownState.districtList} show="isDistrictShow" value="district" />}
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isDisableSubmit}
            className={`border flex justify-center items-center w-[83px] h-[36.5px] rounded bg-[#651FFF]
            ${isDisableSubmit && 'cursor-not-allowed bg-black/[0.12]'} sm:mt-[16px] sm:w-full`}
          >
            <div className={`font-ubuntu font-bold text-[14px] ${isDisableSubmit && 'text-[#00000042]/[0.26]'} text-white`}>Submit</div>
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
            <div className="mt-[48px] w-full">
              <PieChart />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
