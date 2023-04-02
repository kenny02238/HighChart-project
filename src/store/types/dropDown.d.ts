export interface DropDownState {
  year: number | null;
  county: string;
  district: string;
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
