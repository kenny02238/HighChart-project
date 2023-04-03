import { ChartState, ChartAction } from '../types/chart';

export const chartReducer = (
  state: ChartState,
  action: ChartAction,
): ChartState => {
  switch (action.type) {
    case 'barChart':
      return {
        ...state,
        barChart: action.payload!.value,
      };
    case 'pieChart':
      return {
        ...state,
        pieChart: action.payload!.value,
      };
    default:
      return state;
  }
};
