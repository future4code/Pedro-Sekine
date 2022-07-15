// pergunta ao usuário a data de nascimento de uma pessoa (ex.: “24/04/1993”, 
// e a data de emissão da sua carteira de identidade (ex.: “07/11/2015”)

// A função deve retornar um booleano que indica se a carteira precisa ser renovada ou não

// - Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
// - Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
// - Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos

const calculateDiference = (birthday:string, IDissueDate:string):number[] => {
  const birthdayArray:string[] = birthday.split("/") 
  const IDissueDateArray:string[] = IDissueDate.split("/")
  const ComparableBirthdayArray:number[] = birthdayArray.map(string => {
    return Number(string)
  })
  const ComparableIDissueDateArray:number[] = IDissueDateArray.map(string => {
    return Number(string)
  })
  const nowTimestamp:number = Date.now()
  const nowDate:Date = new Date(nowTimestamp)
  const nowDateTransition:string = nowDate.toLocaleDateString('en-GB')
  const NowArray:string[] = nowDateTransition.split("/") 

  const ComparableNow:number[] = NowArray.map(string => {
    return Number(string)
  })

  const birthdayinDays:number = ComparableBirthdayArray[0] + 30*ComparableBirthdayArray[1] + 365*ComparableBirthdayArray[2]
  const IDinDays:number = ComparableIDissueDateArray[0] + 30*ComparableIDissueDateArray[1] + 365*ComparableIDissueDateArray[2]
  const nowinDays:number = ComparableNow[0] + 30*ComparableNow[1] + 365*ComparableNow[2]


  const ageInDays: number = nowinDays - birthdayinDays
  const IDAgeInDays: number = nowinDays - IDinDays

  const age:number = ageInDays/365
  const IDAge:number = IDAgeInDays/365

  return([age, IDAge])
}

const shouldRenewID = (birthday:string, IDissueDate: string):boolean => {
  const [age, IDAge] = calculateDiference(birthday, IDissueDate)
  if (age < 21 && IDAge >= 5) {
    return true
  } else if (21 <= age && age <51 && IDAge >=10) {
    return true
  } else if (51<=age && IDAge >= 15) {
    return true
  } else {
    return false
  }
}

console.log(shouldRenewID("01/01/1994", "05/05/2013"))