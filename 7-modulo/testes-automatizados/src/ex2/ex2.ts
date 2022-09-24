export enum LOCATION {
  EUA = "EUA",
  BRAZIL = "BRAZIL",
}

export enum NATIONALITY {
  BRAZILIAN = "BRAZILIAN",
  AMERICAN = "AMERICAN",
}

export interface User {
  name: string;
  age: number;
  nationality: NATIONALITY;
}

export interface Casino {
  name: string;
  location: LOCATION;
}

// saída

interface Result {
  brazilians: ResultItem;
  americans: ResultItem;
}

interface ResultItem {
  allowed: string[];
  unallowed: string[];
}
// ----

export function verifyAge(casino: Casino, users: User[]): Result {
  // Start by allowed and not allowed
  // than split up by nationality
  let minAge: number;
  if (casino.location === LOCATION.EUA) {
    minAge = 21;
  } else {
    minAge = 18;
  }

  const allowedBR = users
    .filter((user) => {
      return user.age >= minAge;
    })
    .filter((user) => {
      return user.nationality === NATIONALITY.BRAZILIAN;
    })
    .map((user) => {
      return user.name;
    });

  const allowedEUA = users
    .filter((user) => {
      return user.age >= minAge;
    })
    .filter((user) => {
      return user.nationality === "AMERICAN";
    })
    .map((user) => {
      return user.name;
    });

  const unallowedBR = users
    .filter((user) => {
      return user.age < minAge;
    })
    .filter((user) => {
      return user.nationality === NATIONALITY.BRAZILIAN;
    })
    .map((user) => {
      return user.name;
    });

  const unallowedEUA = users
    .filter((user) => {
      return user.age < minAge;
    })
    .filter((user) => {
      return user.nationality === "AMERICAN";
    })
    .map((user) => {
      return user.name;
    });

  const Result = {
    brazilians: { allowed: allowedBR, unallowed: unallowedBR },
    americans: { allowed: allowedEUA, unallowed: unallowedEUA },
  };

  return Result;
}
