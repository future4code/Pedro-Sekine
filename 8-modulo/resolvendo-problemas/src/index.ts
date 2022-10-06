// Exercício 1

// const checkOneEdit = (string1: string, string2: string): boolean => {
//   if (Math.abs(string1.length - string2.length) > 1) {
//     return false;
//   }
//   if (string1.length !== string2.length) {
//     let organizedArrays = { bigger: "", smaller: "" };
//     if (string1.length - string2.length > 0) {
//       organizedArrays = {
//         bigger: string1,
//         smaller: string2,
//       };
//     } else {
//       organizedArrays = {
//         bigger: string2,
//         smaller: string1,
//       };
//     }
//     if (!organizedArrays.bigger.startsWith(organizedArrays.smaller)) {
//       return false;
//     }
//   }

//   let counter: number = 0;

//   string1.split("").map((character, index) => {
//     if (character !== string2[index]) {
//       counter += 1;
//     }
//   });

//   if (counter > 1) {
//     return false;
//   }

//   return true;
// };

// console.log(checkOneEdit("banana", "banana"))
// console.log(checkOneEdit("banana", "bananas"))
// console.log(checkOneEdit("banana", "banan"))
// console.log(checkOneEdit("banana", "bananasdfsdf"))
// console.log(checkOneEdit("banana", "bana"))
// console.log(checkOneEdit("banana", "BAnana"))

// Exercício 2

const stringCompressor = (input: string): string => {
  const compressedString: any[] = [];
  let counter: number = 1;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      counter += 1;
    } else {
      compressedString.push(input[i]);
      compressedString.push(counter);
      counter = 1;
    }
  }

  if (compressedString.length < input.length) {
    return compressedString.join().replace(/\,/g, '');
  } else {
    return input;
  }
};

console.log(stringCompressor("aabbb"))
console.log(stringCompressor("aabcccccaaa"))
console.log(stringCompressor("accurate"))
console.log(stringCompressor("escola"))
console.log(stringCompressor("accuraaaaaaaaaate"))