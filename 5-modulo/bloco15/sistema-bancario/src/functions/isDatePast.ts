export const isDatePast = (date: string): boolean => {
  const now = new Date();
  const nowDay = now.getDate();
  const nowMonth = now.getMonth() + 1;
  const nowYear = now.getFullYear();

  const inputDateArray = date.split("/");
  const [inputDay, inputMonth, inputYear] = inputDateArray;

  const isYearLower: boolean = Number(inputYear) < nowYear;
  const isYearSame: boolean = Number(inputYear) === nowYear;
  const isMonthLower: boolean = Number(inputMonth) < nowMonth;
  const isMonthSame: boolean = Number(inputMonth) === nowMonth;
  const isDayLower: boolean = Number(inputDay) < nowDay;

  if (isYearLower) {
    return true;
  } else if (isYearSame && isMonthLower) {
    return true;
  } else if (isYearSame && isMonthSame && isDayLower) {
    return true;
  } else {
    return false;
  }
};

// DD/MM/YYYY

// return should be the same date as the input or
// empty strings in case it's not valid
