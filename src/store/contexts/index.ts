import { createContext } from 'react';
import { DropDownContextType } from '../types/dropDown';

export const DropDownContext = createContext<DropDownContextType>({
  dropDownState: {
    year: 111,
    county: '請選擇縣/市',
    district: '請先選擇縣/市',
    isYearShow: false,
    isCountyShow: false,
    isDistrictShow: false,
    districtList: [],
  },
  dropDownDispatch: () => {},
});
