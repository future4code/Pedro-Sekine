// Date
export const dateFormatter = (date: string): Date => {
  const toArray = date.split("/").reverse();
  const finalDate = new Date(toArray.join("-"));
  // console.log("finalDate", finalDate)
  return finalDate
};
