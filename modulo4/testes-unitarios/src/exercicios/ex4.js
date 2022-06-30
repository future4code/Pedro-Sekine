export const ordenaArrayCrescente = (array) => {
  const orderedArray = []
  let counter;
  for (let i = 0; i < array.length; i = i + 1) {
    counter = 0
    for (let number of array) {
      if (array[i] > number) {
        counter = counter + 1;
      }
    }
    orderedArray[counter] = array[i]
  }
  return orderedArray;
};