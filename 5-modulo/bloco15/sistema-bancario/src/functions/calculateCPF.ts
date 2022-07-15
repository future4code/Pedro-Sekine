import data from "../data.json";

export const calculateCPF = (CPF: string): boolean => {
  const existanceCheck = data.find((user) => user.CPF === CPF);

  if (existanceCheck) {
    return false;
  } else {
    return true;
  }
};
