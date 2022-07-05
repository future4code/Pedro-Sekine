const DNAtoRNA: (DNA: string) => string = (DNA) => {
  const DNAArray: string[] = DNA.split("");
  const RNAArray: string[] = DNAArray.map(item => {
    switch (item) {
      case "A":
        item = "U";
        break;
      case "T":
        item = "A";
        break;
      case "G":
        item = "C";
        break;
      case "C":
        item = "G";
        break;
    }
    return item
  });
  const RNAString: string = RNAArray.join("")

  return RNAString;
};

console.log(DNAtoRNA("ATTGCTGCGCATTAACGACGCGTA"))

