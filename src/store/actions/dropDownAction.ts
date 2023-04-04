export const upDateDropDownData = (
  type:string | undefined,
  value:string | string[] | number | undefined | null,
) => ({
  type,
  payload: { value },
});

export const upDateDropDownShow = (type:string | undefined, value:boolean) => ({
  type,
  payload: { value },
});
export const upDateDropDownAllShow = (type:string) => ({
  type,
});
