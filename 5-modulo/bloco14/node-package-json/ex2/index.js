// 2 ✅

const numberOne = Number(process.argv[3]);
const numberTwo = Number(process.argv[4]);
const operator = process.argv[2];
let operation;

switch (operator) {
  case "add":
    operation = numberOne + numberTwo;
    break;
  case "sub":
    operation = numberOne - numberTwo;
    break;
  case "mult":
    operation = numberOne * numberTwo;
    break;
  case "div":
    operation = numberOne / numberTwo;
    break;
}

if (numberOne && numberTwo && operator) {
  console.log("\033[1;31m Resposta", "", operation);
} else {
  console.log("\033[1;31m ficou faltando alguma informação por aqui")
}
