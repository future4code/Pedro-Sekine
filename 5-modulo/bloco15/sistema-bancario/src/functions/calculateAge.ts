export const calculateAge = (birthday: string): boolean => {
  const timeNow = new Date();
  const nowYears = timeNow.getFullYear();
  const nowMonths = timeNow.getMonth() + 1;
  const nowDay = timeNow.getDate();
  const totalTime = nowYears * 365 + nowMonths * 30 + nowDay;

  const birthdayArray = birthday.split("/");

  const birthYear = Number(birthdayArray[2]);
  const birthMonth = Number(birthdayArray[1]);
  const birthDay = Number(birthdayArray[0]);

  if (nowYears - birthYear > 18) {
    return true;
  } else if (nowYears - birthYear < 18) {
    return false;
  } else if (nowYears - birthYear === 18 && birthMonth < nowMonths) {
    return true;
  } else if (nowYears - birthYear === 18 && birthMonth > nowMonths) {
    return false;
  } else if (nowYears - birthYear === 18 && birthMonth === nowMonths && birthDay <= nowDay) {
    return true
  } else if(nowYears - birthYear === 18 && birthMonth === nowMonths && birthDay > nowDay) {
    return false
  } else {
    return false
  }

};
