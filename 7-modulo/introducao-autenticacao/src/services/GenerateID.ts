import { v4 } from "uuid"

export class GenerateID {
  public getID = ():string => {
    const ID = v4()
    return ID
  }  
}