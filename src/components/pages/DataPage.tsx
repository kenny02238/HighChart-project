import React, { useEffect, useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header, Aside, Main } from '../layouts';
import { DropDownContext, ChartContext } from '../../store/contexts';
import {
  AccumulatorBar, CurrentValueBar, AccumulatorPie, CurrentValuePie,
} from './types/dataPage';
import { updateBarChartData, updatePieChartData } from '../../store/actions/chartAction';
import { upDateDropDownData } from '../../store/actions/dropDownAction';
import roller from './styles/dataPage.module.css';

export default function DataPage() {
  const { year, county, district } = useParams();
  const { dropDownDispatch } = useContext(DropDownContext);
  const { chartDispatch } = useContext(ChartContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchChartData = async () => {
      setIsLoading(true);
      dropDownDispatch(upDateDropDownData(county, county));
      dropDownDispatch(upDateDropDownData(district, district));
      dropDownDispatch(upDateDropDownData(year, year));

      try {
        const encodedCounty = encodeURIComponent(county as string);
        const encodedDistrict = encodeURIComponent(district as string);
        const res = await fetch(`https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/${year}?COUNTY=${encodedCounty}&TOWN=${encodedDistrict}`);
        const response = await res.json();
        const barInitialValue = { dataMale: [0, 0], dataFemale: [0, 0] };
        const barChartData = response.responseData.reduce(
          (accumulator:AccumulatorBar, currentValue:CurrentValueBar) => {
            const {
              // eslint-disable-next-line @typescript-eslint/naming-convention
              household_ordinary_m, household_business_m, household_single_m,
              // eslint-disable-next-line @typescript-eslint/naming-convention
              household_ordinary_f, household_business_f, household_single_f,
            } = currentValue;
            return {
              dataMale: [
                // eslint-disable-next-line max-len
                accumulator.dataMale[0] + parseInt(household_ordinary_m, 10) + parseInt(household_business_m, 10),
                accumulator.dataMale[1] + parseInt(household_single_m, 10),
              ],
              dataFemale: [
                // eslint-disable-next-line max-len
                accumulator.dataFemale[0] + parseInt(household_ordinary_f, 10) + parseInt(household_business_f, 10),
                accumulator.dataFemale[1] + parseInt(household_single_f, 10),
              ],
            };
          },
          barInitialValue,
        );
        const pieInitialValue = { common: 0, alone: 0 };
        const pieChartData = response.responseData.reduce(
          (accumulator:AccumulatorPie, currentValue:CurrentValuePie) => {
            const {
              // eslint-disable-next-line @typescript-eslint/naming-convention
              household_ordinary_total, household_business_total, household_single_total,
            } = currentValue;
            return {
              // eslint-disable-next-line max-len
              common: accumulator.common + parseInt(household_ordinary_total, 10) + parseInt(household_business_total, 10),
              alone: accumulator.alone + parseInt(household_single_total, 10),
            };
          },
          pieInitialValue,
        );
        chartDispatch(updateBarChartData('barChart', barChartData));
        chartDispatch(updatePieChartData('pieChart', pieChartData));
        setIsLoading(false);
      } catch (err) {
        // 暫用alert處理err
        // eslint-disable-next-line no-alert
        alert('查無資料');
        dropDownDispatch(upDateDropDownData(county, ''));
        dropDownDispatch(upDateDropDownData(district, ''));
        navigate('/');
      }
    };
    fetchChartData();
  }, [year, county, district]);
  return (
    <div className="font-sans">
      <Header />
      <div className="mt-[8px] relative">
        <div className="absolute top-0 left-0 -z-10">
          <Aside />
        </div>
        <Main />
      </div>
      {/* 轉圈圈動畫 */}
      <div
        className={`bg-[#3A3A3A]/[.2] w-full h-full ${
          isLoading || 'hidden'
        } fixed top-0`}
      />
      <div className=" fixed top-[50vh] left-[50vw] -translate-x-[50%] -translate-y-[50%]">
        <div className={`${isLoading ? roller.roller : ''}`}>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
}
