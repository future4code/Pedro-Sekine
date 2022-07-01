export const upperCaseFirstLetter = (string) => {
  string = string.split("")
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      string[i+1] = string[i+1].toUpperCase()
    } else if ( i === 0) {
      string[i] = string[i].toUpperCase()
    }
  }
  string = string.join("")
  return string
};
