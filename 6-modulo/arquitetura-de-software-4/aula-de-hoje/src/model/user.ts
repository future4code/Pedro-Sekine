export type user = {
   id: string,
   name: string,
   nickname: string,
   email: string,
   password: string
}

export interface UserInputDTO {
   name: string,
   nickname: string,
   email: string,
   password: string
}

// export interface UserOutputDTO {
//    name: string,
//    nickname: string,
//    email: string,
//    id: string
// }