const isEligigleStudent: (
  age: number,
  highSchool: boolean,
  hoursAvailable: number,
  courseSelection: string
) => boolean = (age, highSchool, hoursAvailable, courseSelection) => {
  if (age < 18 || highSchool === false) {
    return false
  } else if (courseSelection === "day" && hoursAvailable < 40 || courseSelection === "night" && hoursAvailable < 20) {
    return false
  }

  return true;
};


console.log(isEligigleStudent(18, true, 40, "day")) //true
console.log(isEligigleStudent(18, true, 30, "day")) //false
console.log(isEligigleStudent(18, true, 20, "night")) //true
console.log(isEligigleStudent(18, true, 10, "night")) //false
console.log(isEligigleStudent(18, false, 20, "night")) //false
console.log(isEligigleStudent(17, true, 20, "night")) //false
