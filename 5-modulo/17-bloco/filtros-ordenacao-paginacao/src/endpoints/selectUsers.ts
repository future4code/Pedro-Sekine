import { connection } from "../connection";

export default async function selectUsers(
  nameFilter: string,
  typeFilter: string,
  orderTypeChoice: string,
  page: string
): Promise<any> {
  if (!nameFilter) {
    nameFilter = "%";
  }
  if (!typeFilter) {
    typeFilter = "%";
  }
  if (!orderTypeChoice){
    orderTypeChoice = "email"
  }
  if (
    orderTypeChoice.toLowerCase() !== "name" ||
    orderTypeChoice.toLowerCase() !== "type" ||
    orderTypeChoice.toLowerCase() !== "email"
  ){
    orderTypeChoice = "email" 
  }
  if (!page || Number(page) < 0) {
    page = "1"
  }

  const pageSize = 5
  const offsetCalculation = pageSize * (Number(page) - 1)

  const result = await connection("aula48_exercicio")
    .select("id", "name", "email", "type")
    .whereILike("name", `%${nameFilter}%`)
    .whereILike("type", `%${typeFilter}%`)
    .orderBy(`${orderTypeChoice.toLowerCase()}`, 'asc')
    .limit(pageSize)
    .offset(offsetCalculation)
    ;
  return result;
}
