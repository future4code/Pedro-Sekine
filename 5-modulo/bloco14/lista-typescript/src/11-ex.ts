//dividir em partes
// 1 a 3
// 4
// 5
// 6 a 8
// 9
// 10

// Multiplicar dezenas, centenas, milhares

const numberToArray = (number: number): number[] => {
  const numbersArrayString: string[] = number.toString().split("");
  const numbersArray = numbersArrayString.map((character, index) => {
    const numberCharacter: number = Number(character);
    const calculatedCharacter: number =
      numberCharacter * Math.pow(10, numbersArrayString.length - 1 - index);
    return calculatedCharacter;
  });
  return numbersArray;
};

const decimalToRoman = (number: number): string => {
  if (number >= 4000) {
    return "Consigo converter valores até 3999!";
  }

  const referenceArray: number[] = numberToArray(number);

  const romanCalculation: string[] = referenceArray.map((number, index) => {
    let equivalentRomanCharacter: string = "";

    if (number >= 1000) {
      switch (number) {
        case 1000:
          equivalentRomanCharacter = "M";
          break;
        case 2000:
          equivalentRomanCharacter = "MM";
          break;
        case 3000:
          equivalentRomanCharacter = "MMM";
          break;
      }
    } else if (number >= 100 && number < 1000) {
      switch (number) {
        case 100:
          equivalentRomanCharacter = "C";
          break;
        case 200:
          equivalentRomanCharacter = "CC";
          break;
        case 300:
          equivalentRomanCharacter = "CCC";
          break;
        case 400:
          equivalentRomanCharacter = "CD";
          break;
        case 500:
          equivalentRomanCharacter = "D";
          break;
        case 600:
          equivalentRomanCharacter = "DC";
          break;
        case 700:
          equivalentRomanCharacter = "DCC";
          break;
        case 800:
          equivalentRomanCharacter = "DCCC";
          break;
        case 900:
          equivalentRomanCharacter = "CM";
          break;
      }
    } else if (number >= 10 && number < 100) {
      switch (number) {
        case 10:
          equivalentRomanCharacter = "X";
          break;
        case 20:
          equivalentRomanCharacter = "XX";
          break;
        case 30:
          equivalentRomanCharacter = "XXX";
          break;
        case 40:
          equivalentRomanCharacter = "XL";
          break;
        case 50:
          equivalentRomanCharacter = "L";
          break;
        case 60:
          equivalentRomanCharacter = "LX";
          break;
        case 70:
          equivalentRomanCharacter = "LXX";
          break;
        case 80:
          equivalentRomanCharacter = "LXXX";
          break;
        case 90:
          equivalentRomanCharacter = "XC";
          break;
      }
    } else if (number >= 1 && number < 10) {
      switch (number) {
        case 1:
          equivalentRomanCharacter = "I";
          break;
        case 2:
          equivalentRomanCharacter = "II";
          break;
        case 3:
          equivalentRomanCharacter = "III";
          break;
        case 4:
          equivalentRomanCharacter = "IV";
          break;
        case 5:
          equivalentRomanCharacter = "V";
          break;
        case 6:
          equivalentRomanCharacter = "VI";
          break;
        case 7:
          equivalentRomanCharacter = "VII";
          break;
        case 8:
          equivalentRomanCharacter = "VIII";
          break;
        case 9:
          equivalentRomanCharacter = "IX";
          break;
      }
    } else if (number === 0) {
      equivalentRomanCharacter = "";
    } else {
      equivalentRomanCharacter = "erro";
    }
    return equivalentRomanCharacter;
  });

  const finalString = romanCalculation.join("");
  return finalString;
};

console.log(decimalToRoman(1));
console.log(decimalToRoman(10));
console.log(decimalToRoman(100));
console.log(decimalToRoman(1000));
console.log(decimalToRoman(4000));
console.log(decimalToRoman(1990));


//  I, V, X, L, C,
// D, M
// console.log(numberToArray(289));
// console.log(numberToArray(1532));
// console.log(numberToArray(23));
// console.log(numberToArray(4));
