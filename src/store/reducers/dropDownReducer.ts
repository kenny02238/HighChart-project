import { DropDownState, DropDownAction } from '../types/dropDown';

export const dropDownReducer = (
  state: DropDownState,
  action: DropDownAction,
): DropDownState => {
  switch (action.type) {
    case 'year':
      return {
        ...state,
        year: action.payload!.value,
      };
    case 'county':
      return {
        ...state,
        county: action.payload!.value,
      };
    case 'district':
      return {
        ...state,
        district: action.payload!.value,
      };

    default:
      return state;
  }
};
