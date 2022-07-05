const formatCPF = (rawCPF: string): number[] => {
  const removeHifen: string[] = rawCPF.split("-");
  const backToString:string = removeHifen.join("")
  const removeFullStop:string[] = backToString.split(".")
  const backToStringAgain:string = removeFullStop.join("")
  const singleCharacterArray:string[] = backToStringAgain.split("")

  const numbersArray: number[] = singleCharacterArray.map((character) => {
    return Number(character);
  });

  return numbersArray;
};

// number
type DVType = 10 | 11;

const calculateDV = (CPF: number[], verifiedIndex: DVType): number => {
  const baseCPF: number[] = CPF.filter((number, index) => {
    return index < verifiedIndex - 1;
  });

  const sequenceMultiplicationCPF: number[] = baseCPF.map((number, index) => {
    return number * (baseCPF.length - index + 1);
  });
  const totalSum: number = sequenceMultiplicationCPF.reduce((a, b) => a + b);
  const divisionRest: number = totalSum % 11;
  const finalResult: number = 11 - divisionRest;

  if (finalResult >= 10) {
    return 0;
  } else {
    return finalResult;
  }
};

const verifyRepetition = (CPF:number[]):boolean => {
  const referenceCharacter = CPF[0]
  const RepetitionFirstCharacterArray = CPF.filter(character => {
    return (character !== referenceCharacter)
  })

  if (RepetitionFirstCharacterArray.length > 1) {
    return false
  } else {
    return true
  }

}

const verifyCPF = (inputCPF:string):boolean => {
  const referenceCPF:number[] = formatCPF(inputCPF)
  const DVOne:number = calculateDV(referenceCPF, 10)
  const DVTwo:number = calculateDV(referenceCPF, 11)

  const repetitionVerification:boolean = verifyRepetition(referenceCPF)
  if (repetitionVerification){
    return false
  }

  if (DVOne !== referenceCPF[9] || DVTwo !== referenceCPF[10]) {
    return false
  } else {
    return true
  }
}