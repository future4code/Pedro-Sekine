export const getToday = (): string => {
  const now = new Date();
  const nowDay = now.getDate();
  const nowMonth = now.getMonth() + 1;
  const nowYear = now.getFullYear();

  const dateConstructor:string = `${nowDay}/${nowMonth}/${nowYear}`

  return dateConstructor

};

// DD/MM/YYYY