export interface ChartState {
  barChart: {
    dataMale: number[],
    dataFemale: number[],
  };
  pieChart:{
    common:number;
    alone:number;
  }
  [key: string];
}
export interface ChartAction {
  type: string;
  payload?: { value: any };
}
export interface ChartContextType {
  chartState: ChartState;
  chartDispatch: React.Dispatch<any>;
}
