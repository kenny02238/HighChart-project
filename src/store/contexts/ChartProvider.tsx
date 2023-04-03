import React, { useReducer, ReactNode, useMemo } from 'react';
import { chartReducer } from '../reducers/chartReducer';
import { ChartState } from '../types/chart';
import { ChartContext } from '.';

const initialState: ChartState = {
  barChart: {
    dataMale: [0, 0],
    dataFemale: [0, 0],
  },
};

export function ChartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [chartState, chartDispatch] = useReducer(
    chartReducer,
    initialState,
  );
  // eslint-disable-next-line max-len
  const value = useMemo(() => ({ chartState, chartDispatch }), [chartState, chartDispatch]);

  return (
    <ChartContext.Provider value={value}>
      {children}
    </ChartContext.Provider>
  );
}
