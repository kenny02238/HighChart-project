import React, { useReducer, ReactNode, useMemo } from 'react';
import { dropDownReducer } from '../reducers/dropDownReducer';
import { DropDownState } from '../types/dropDown';
import { DropDownContext } from '.';

const initialState: DropDownState = {
  year: '111',
  county: '請選擇縣/市',
  district: '請先選擇縣/市',
  isYearShow: false,
  isCountyShow: false,
  isDistrictShow: false,
  districtList: [],
};

export function DropDownProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [dropDownState, dropDownDispatch] = useReducer(
    dropDownReducer,
    initialState,
  );
  // eslint-disable-next-line max-len
  const value = useMemo(() => ({ dropDownState, dropDownDispatch }), [dropDownState, dropDownDispatch]);

  return (
    <DropDownContext.Provider value={value}>
      {children}
    </DropDownContext.Provider>
  );
}
