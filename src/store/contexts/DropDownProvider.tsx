import React, { useReducer, ReactNode, useMemo } from 'react';
import { dropDownReducer } from '../reducers/dropDownReducer';
import { DropDownState } from '../types/dropDown';
import { DropDownContext } from '.';

const initialState: DropDownState = {
  year: null,
  county: '',
  district: '',
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
