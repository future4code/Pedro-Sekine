// Escreva um algoritmo para ler uma temperatura em graus Fahrenheit,
// calcular e escrever o valor correspondente em graus Celsius 
// (baseado na fórmula abaixo): (0 °C × 9/5) + 32 = 32 °F

const convertFarenheitCelsius = (temperatureF) => {
  const temperatureC = (temperatureF - 32) * 5 / 9
  return temperatureC
}

const promptTemperatureF = Number(prompt("qual é a temperatura que você quer converter para C?"))

const convertedTemperature = convertFarenheitCelsius(promptTemperatureF)

console.log(convertedTemperature)