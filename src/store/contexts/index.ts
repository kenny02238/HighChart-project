import { createContext } from 'react';
import { DropDownContextType } from '../types/dropDown';
import { ChartContextType } from '../types/chart';

export const DropDownContext = createContext<DropDownContextType>({
  dropDownState: {
    year: '111',
    county: '請選擇縣/市',
    district: '請先選擇縣/市',
    isYearShow: false,
    isCountyShow: false,
    isDistrictShow: false,
    districtList: [],
  },
  dropDownDispatch: () => {},
});

export const ChartContext = createContext<ChartContextType>({
  chartState: {
    barChart: {
      dataMale: [0, 0],
      dataFemale: [0, 0],
    },
    pieChart: {
      common: 0,
      alone: 0,
    },
  },
  chartDispatch: () => {},
});
