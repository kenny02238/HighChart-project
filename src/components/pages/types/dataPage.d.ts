export interface AccumulatorBar { dataMale: number[], dataFemale: number[] }
export interface CurrentValueBar {
  household_ordinary_m:string;
  household_business_m:string;
  household_single_m:string;
  household_ordinary_f:string;
  household_business_f:string;
  household_single_f:string;
}
export interface AccumulatorPie { common: number, alone: number}
export interface CurrentValuePie {
  household_ordinary_total:string;
  household_business_total:string;
  household_single_total:string;
}
