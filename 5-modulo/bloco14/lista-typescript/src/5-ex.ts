// função que receba este array como parâmetro e retorne uma lista com apenas os emails dos usuários “admin”. 
type User = {
  name:string,
  email:string,
  role: string
}

const users:User[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

const adminEmailList = (list:User[]):string[] => {
  const filteredList:User[] = list.filter(user => {
    return (user.role === "admin")
  })
  const formattedList:string[] = filteredList.map(user => {
    return(user.email)
  })

  return formattedList
}

console.log(adminEmailList(users))