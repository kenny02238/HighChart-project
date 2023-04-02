import { createContext } from 'react';
import { DropDownContextType } from '../types/dropDown';

export const DropDownContext = createContext<DropDownContextType>({
  dropDownState: {
    year: null,
    county: '',
    district: '',

  },
  dropDownDispatch: () => {},
});
