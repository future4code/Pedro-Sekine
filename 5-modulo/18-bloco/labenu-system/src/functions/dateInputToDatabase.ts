type returnDate = {
  isValid: boolean;
  message: string;
};

export const dateInputToDatabase = (inputDate: string): returnDate => {
  // INPUT DD/MM/YYYY
  // YYYY-MM-DD MYSQL
  const inputDateArray = inputDate.split("/");
  // [DD,MM,YYYY]
  const workingArray = inputDateArray.map((value) => {
    return Number(value);
  });
  workingArray.forEach((date) => {
    if (!Number.isInteger(date)) {
      return { isValid: false, message: "data inválida" };
    }
  });

  const currentYear:number = new Date().getFullYear()

  if (workingArray[0] < 1 || workingArray[0] > 31) {
    return { isValid: false, message: "data inválida" };
  } else if (workingArray[1] < 1 || workingArray[1] >12) {
    return { isValid: false, message: "data inválida" };
  } else if (workingArray[2] < currentYear-125 || workingArray[2] > currentYear) {
    return { isValid: false, message: "data inválida" };
  }

  const databaseArray = [...workingArray].reverse()
  const dateOutputString = databaseArray.join("-")
  if (isNaN(workingArray[0]) || isNaN(workingArray[1] ) || isNaN(workingArray[2])){
    return {isValid: false, message: "data inválida"};
  }
  return {isValid: true, message: dateOutputString};
};
