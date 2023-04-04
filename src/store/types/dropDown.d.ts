export interface DropDownState {
  year: string;
  county: string;
  district: string;
  isYearShow:boolean;
  isCountyShow:boolean;
  isDistrictShow:boolean;
  districtList?:string[];
  [key: string];
}
export interface DropDownAction {
  type: string;
  payload?: { value: any };
}
export interface DropDownContextType {
  dropDownState: DropDownState;
  dropDownDispatch: React.Dispatch<any>;
}
