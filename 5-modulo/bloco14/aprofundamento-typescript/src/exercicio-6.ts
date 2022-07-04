// Pré História -> até -100.000
// -4000 até +475 - Idade Antiga
// 476 até 1452 - Idade Média
// 1452 até 1788 - Idade Moderne
// 1789 hoje - Idade Contemporânea

const determinaPeriodoHistorico = (
  ano: number,
  antesOuDepoisDeCristo?: "AC" | "DC"
): string => {
  if (antesOuDepoisDeCristo === "AC") {
    ano = -ano;
  }

  if (ano < -4000) {
    return "Pré-história";
  } else if (ano < 476) {
    return "Idade Antiga";
  } else if (ano < 1452) {
    return "Idade Média";
  } else if (ano < 1789) {
    return "Idade Moderna";
  } else if (ano <= 2022) {
    return "Idade Contemporânea";
  }

  return "Não sabemos ainda qual período histórico teremos no futuro!";
};

console.log(determinaPeriodoHistorico(100000, "AC"))
console.log(determinaPeriodoHistorico(10000, "AC"))
console.log(determinaPeriodoHistorico(10000, "AC"))
console.log(determinaPeriodoHistorico(1000, "AC"))
console.log(determinaPeriodoHistorico(-1000))
console.log(determinaPeriodoHistorico(450, "AC"))
console.log(determinaPeriodoHistorico(0))
console.log(determinaPeriodoHistorico(1400))
console.log(determinaPeriodoHistorico(1500, "DC"))
console.log(determinaPeriodoHistorico(1800))
console.log(determinaPeriodoHistorico(2100))
console.log(determinaPeriodoHistorico(2100, "DC"))