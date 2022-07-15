const calculatePossibilities = (word: string): number => {
  const wordLength: number = word.length;
  if (wordLength > 1) {
    const wordArray: string[] = word.split("");
    const arrayNumber: number[] = wordArray.map((letter, index) => {
      return index + 1;
    });
    const result = arrayNumber.reduce((a, b) => a * b, 1);
    return result;
  } else {
    return 1;
  }
};


console.log(calculatePossibilities(""))
console.log(calculatePossibilities("a"))
console.log(calculatePossibilities("oi"))
console.log(calculatePossibilities("oie"))
console.log(calculatePossibilities("pato"))
console.log(calculatePossibilities("pedro"))
console.log(calculatePossibilities("portas"))