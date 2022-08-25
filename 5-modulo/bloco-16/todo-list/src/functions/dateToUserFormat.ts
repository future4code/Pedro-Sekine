export const dateToUserFormat = (date: string): string => {
  console.log("date recebido", date);
  console.log(typeof date);
  const workableDate = new Date(date);
  const stringDate = workableDate.toJSON();

  const toArray = stringDate.split("T");
  console.log("toArray", toArray);
  const standardDate = toArray[0].split("-").reverse();
  console.log("standardData", standardDate);
  const finalDate = standardDate.join("/");
  console.log("finalDate", finalDate);
  return finalDate;
};
