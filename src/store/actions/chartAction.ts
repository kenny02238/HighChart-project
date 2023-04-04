export const updateBarChartData = (
  type:string,
  value:{ dataMale:number[]; dataFemale:number[] },
) => ({
  type,
  payload: { value },
});

export const updatePieChartData = (
  type:string,
  value:{ common:number;alone:number },
) => ({
  type,
  payload: { value },
});
