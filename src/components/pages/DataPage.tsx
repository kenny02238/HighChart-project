import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header, Aside, Main } from '../layouts';
import { DropDownContext } from '../../store/contexts';
import { Accumulator, CurrentValue } from './types/dataPage';
import roller from './styles/dataPage.module.css';

export default function DataPage() {
  const { year, county, district } = useParams();
  const { dropDownDispatch } = useContext(DropDownContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchChartData = async () => {
      setIsLoading(true);
      dropDownDispatch({ type: 'county', payload: { value: county } });
      dropDownDispatch({ type: 'district', payload: { value: district } });
      dropDownDispatch({ type: 'year', payload: { value: year } });
      try {
        const encodedCounty = encodeURIComponent(county as string);
        const encodedDistrict = encodeURIComponent(district as string);
        const res = await fetch(`https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/${year}?COUNTY=${encodedCounty}&TOWN=${encodedDistrict}`);
        const response = await res.json();
        const initialValue = { ordinaryTotal: 0, singleTotal: 0 };
        const totals = response.responseData.reduce(
          (accumulator:Accumulator, currentValue:CurrentValue) => {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            const { household_ordinary_total, household_single_total } = currentValue;
            return {
              ordinaryTotal: accumulator.ordinaryTotal + parseInt(household_ordinary_total, 10),
              singleTotal: accumulator.singleTotal + parseInt(household_single_total, 10),
            };
          },
          initialValue,
        );
        console.log(response);
        console.log(totals.ordinaryTotal); // 3060
        console.log(totals.singleTotal); // 28
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchChartData();
  }, [year, county, district]);
  return (
    <div className="font-sans">
      <Header />
      <div className="mt-[8px]">
        <Aside />
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
