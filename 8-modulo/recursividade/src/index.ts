// const printAllNumbers = (number: number, counter?:number) => {
//   if (typeof(counter) === "undefined"){
//     counter = 0
//   }

//   if (counter === number) {
//     console.log(counter);
//     return;
//   } else {
//     console.log(counter);
//   }

//   counter += 1;
//   printAllNumbers(number, counter);
// };

// printAllNumbers(10);
// printAllNumbers(5);
// printAllNumbers(100);

// const printAllNumbers = (number: number, counter?: number) => {
//   if (typeof counter === "undefined") {
//     counter = 0;
//   }

//   if (number === counter) {
//     console.log(number - counter);
//     return;
//   }

//   console.log(number - counter);
//   counter += 1;
//   printAllNumbers(number, counter);
// };

// printAllNumbers(10)
// printAllNumbers(5)
// printAllNumbers(10)

// const calculateSum = (number: number, counter: number = 0): number => {
//   if (number === 0) {
//     return counter;
//   }
//   counter += number;
//   console.log("number", number);
//   console.log("counter", counter);
//   return calculateSum(number - 1, counter);
// };

// console.log(calculateSum(6));

// const calculateSum = (number: number): number => {
//   let sum: number = 0;
//   for (let i = 0; i <= number; i++) {
//     sum += i;
//   }
//   return sum;
// };

// console.log(calculateSum(1));
// console.log(calculateSum(2));
// console.log(calculateSum(3));
// console.log(calculateSum(6));

const printArrayElements = (array: any[], index: number = 0) => {
  if (typeof index === "undefined") {
    index = 0;
  }

  console.log(array[index]);
  
  if (index === array.length - 1) {
    return;
  }
  printArrayElements(array, index + 1);
};

printArrayElements(["oi", "tudo", "bem"])