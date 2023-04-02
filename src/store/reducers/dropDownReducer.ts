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
    case 'isYearShow':
      return {
        ...state,
        isYearShow: action.payload!.value,
        isCountyShow: false,
        isDistrictShow: false,
      };
    case 'isCountyShow':
      return {
        ...state,
        isCountyShow: action.payload!.value,
        isYearShow: false,
        isDistrictShow: false,
      };
    case 'isDistrictShow':
      return {
        ...state,
        isDistrictShow: action.payload!.value,
        isYearShow: false,
        isCountyShow: false,
      };
    case 'closeAllShow':
      return {
        ...state,
        isYearShow: false,
        isCountyShow: false,
        isDistrictShow: false,
      };
    case 'districtList':
      return {
        ...state,
        districtList: action.payload!.value,
      };

    default:
      return state;
  }
};
