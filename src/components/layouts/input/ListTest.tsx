import React, { useContext, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { DropDownContext } from '../../../store/contexts';

type Props = {
  lists: any[];
  show:string;
  value:string;
};

export default function ListTest({ lists, value, show }:Props) {
  const { dropDownState, dropDownDispatch } = useContext(DropDownContext);
  useEffect(() => {
    const fetchDistrict = async () => {
      if (dropDownState.district !== '請先選擇縣/市') { dropDownDispatch({ type: 'district', payload: { value: '' } }); }
      try {
        const encodedCounty = encodeURIComponent(dropDownState.county);
        const res = await fetch(`https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/${dropDownState.year}?COUNTY=${encodedCounty}`);
        const response = await res.json();
        if (response && response.responseData) {
          const districts = [...new Set<string>(
            response.responseData.map((item:any) => item.site_id.split(' ')[0].replace(dropDownState.county, '')),
          )];
          dropDownDispatch({ type: 'districtList', payload: { value: districts } });
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchDistrict();
  }, [dropDownState.county]);

  // eslint-disable-next-line max-len
  const handleList:React.MouseEventHandler<HTMLButtonElement> = (e:React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLElement;
    dropDownDispatch({ type: value, payload: { value: target.textContent } });
    dropDownDispatch({ type: show, payload: { value: false } });
  };
  const handleListClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const renderList = () => lists.map((list) => (
    <button
      type="button"
      key={nanoid(8)}
      className="hover:bg-slate-200 w-full px-5 py-[6px] flex items-center"
      onClick={handleList}
      onMouseDown={handleListClick}
    >
      {list}
    </button>
  ));

  return (
    <div className={`w-full h-[258px]  ${dropDownState[show] || 'hidden'}  z-10 overflow-scroll shadow-[0px_4px_2px_rgba(0,0,0,0.25)] cursor-pointer`}>
      {renderList()}
    </div>
  );
}
