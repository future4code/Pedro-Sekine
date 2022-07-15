export const validateDate = (date: string): string => {
  const now = new Date();
  const nowDay = now.getDate();
  const nowMonth = now.getMonth() + 1;
  const nowYear = now.getFullYear();
  if (!date) {
    const finalDate = `${nowDay}/${nowMonth}/${nowYear}`;
    return finalDate;
  }
  const inputDateArray = date.split("/");
  const [inputDay, inputMonth, inputYear] = inputDateArray;

  const isYearLower: boolean = Number(inputYear) < nowYear;
  const isYearSame: boolean = Number(inputYear) === nowYear;
  const isMonthLower: boolean = Number(inputMonth) < nowMonth;
  const isMonthSame: boolean = Number(inputMonth) === nowMonth;
  const isDayLower: boolean = Number(inputDay) < nowDay;

  if (isYearLower) {
    return "";
  } else if(isYearSame && isMonthLower) {
    return ""
  } else if (isYearSame && isMonthSame && isDayLower) {
    return ""
  } else {
    return date
  }
};

// DD/MM/YYYY

// return should be the same date as the input or
// empty strings in case it's not valid
