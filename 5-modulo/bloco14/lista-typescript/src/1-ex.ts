// Exercício 1

const dataToPhrase = (name: string, birthday: string): string => {
  const splitBrithdayArray: string[] = birthday.split("/");
  const numberArray: number[] = splitBrithdayArray.map((stringDay) => {
    return Number(stringDay);
  });

  let birthdayMonth: string;

  switch (numberArray[1]) {
    case 1:
      birthdayMonth = "Janeiro";
      break;
    case 2:
      birthdayMonth = "February";
      break;
    case 3:
      birthdayMonth = "March";
      break;
    case 4:
      birthdayMonth = "April";
      break;
    case 5:
      birthdayMonth = "May";
      break;
    case 6:
      birthdayMonth = "June";
      break;
    case 7:
      birthdayMonth = "July";
      break;
    case 8:
      birthdayMonth = "August";
      break;
    case 9:
      birthdayMonth = "September";
      break;
    case 10:
      birthdayMonth = "October";
      break;
    case 11:
      birthdayMonth = "November";
      break;
    case 12:
      birthdayMonth = "December";
      break;
    default:
      birthdayMonth = "data inválida";
  }

  const finalMessage: string = `Olá me chamo ${name}, nasci no dia ${numberArray[0]} do mês de ${birthdayMonth} do ano de ${numberArray[2]} `;

  return finalMessage;
};

console.log(dataToPhrase("Pedro", "16/05/1994"))
console.log(dataToPhrase("Júlia", "05/07/1998"))