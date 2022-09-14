export type task = {
   id: string,
   title: string,
   description: string,
   deadline: string,
   authorId: string
}


export interface TaskInputDTO {
   title: string,
   description: string,
   deadline: string,
   authorId: string
}