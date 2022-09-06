import { Customer } from "./classes/Customer";
import { Employee } from "./classes/Employee";
import { Seller } from "./classes/Seller";
import { User } from "./classes/User";

// const newUser = new User("idTest", "emailTest", "nameTest", "passwordTest");

// console.log(newUser.getId());
// console.log(newUser.getName());
// console.log(newUser.getEmail());

// const newCustomer = new Customer(
//   "idTest2",
//   "emailTest2",
//   "nameTest2",
//   "passwordTest2",
//   "creditCardTest"
// );

// console.log(newCustomer.introduceYourself())

// const newEmployee = new Employee(
//   "tid",
//   "temail",
//   "tname",
//   "tpassword",
//   "tadmissionDate",
//   2000
// );
// console.log(newEmployee.getAdmissionDate())
// console.log(newEmployee.getTotalSalary())

// const newSeller = new Seller('id','email', 'name', 'password', 'date', 2500)

// newSeller.setSalesQuantity(8)

// console.log(newSeller.getSalesQuantity())
// console.log('newSeller total salary', newSeller.getTotalSalary())

// const oldSeller = new Seller('oid','oemail', 'oname', 'opassword', 'odate', 1000)

// console.log(oldSeller.getTotalSalary())


// POLIMORFISMO 🔴🔴🔴🔴🔴🔴

export interface Client {
  name: string;
  // Refere-se ao nome do cliente

  registrationNumber: number;
  // Refere-se ao número de cadastro do cliente na concessionária
  // como se fosse um id

  consumedEnergy: number;
  // Refere-se à energia consumida pelo cliente no mês

  calculateBill(): number;
  // Retorna o valor da conta em reais
}

export class ClientManager {
  private clients: Client[]

  public registerClient(client: Client): void {
    this.clients.push(client)
  }
  
  public getClientsQuantity = ():number => {
    return this.clients.length
  }

  public calculateBillOfClient(registrationNumber: number): number {
			
    const foundClient = this.clients.find((client) => {
      return client.registrationNumber === registrationNumber
    })

    if(foundClient){
        // verificando se o usuário existe
        return foundClient.calculateBill()
    }
    
    return 0;
  }

  public calculateTotalIncome = ():number => {
    const arrayOfBills:number[] = this.clients.map((client) => {
      return client.calculateBill()
    })

    //soma e collaps array
    const totalIncome:number = arrayOfBills.reduce((a, b) => a + b)

    return totalIncome
  }

  public deleteClient = (registrationNumber: number):void => {
    const filteredClients = this.clients.filter(client => {
      if (client.registrationNumber === registrationNumber) {
        return false
      } else {
        return true
      }
    })

    this.clients = filteredClients
  }

}

// class ClientClass implements Client {
//   name: string;
//   registrationNumber: number;
//   consumedEnergy: number;

//   constructor(
//     name: string,
//     registrationNumber: number,
//     consumedEnergy: number
//   ) {
//     this.name = name;
//     this.registrationNumber = registrationNumber;
//     this.consumedEnergy = consumedEnergy;
//   }

//   calculateBill(): number {
//     return 2;
//   }
// }

// const clientObject:Client = new ClientClass("nametext", 10, 20);

// console.log(clientObject.calculateBill());
// console.log(clientObject.consumedEnergy);
// console.log(clientObject.name);
// console.log(clientObject.registrationNumber);

export abstract class Place {
  constructor(protected cep: string) {}

  public getCep(): string {
    return this.cep;
  }
}
// const testPlace = new Place
// Cannot create an instance of an abstract class.ts(2511)
// class ExtentionPlace extends Place {}
// const testPlace2 = new ExtentionPlace("cepteste")

export class Commerce extends Place {
  constructor(
    protected floorsQuantity: number,
    // Refere-se à quantidade de andares do lugar

    cep: string
  ) {
    super(cep);
  }

  public getFloorsQuantity = (): number => {
    return this.floorsQuantity;
  };
}

export class Industry extends Place {
  constructor(
    protected machinesQuantity: number,
    // Refere-se à quantidade de máquinas do local

    cep: string
  ) {
    super(cep);
  }
}

export class Residence extends Place {
  constructor(
    protected residentsQuantity: number,
    // Refere-se ao número de moradores da casa

    cep: string
  ) {
    super(cep);
  }

  public getResidents(): number {
    return this.residentsQuantity;
  }
}

// const ap1 = new Residence(2, "cepap1");
// console.log(ap1.getCep());
// console.log(ap1.getResidents());

// const commerce1 = new Commerce(20, "cepCommerce");
// console.log(commerce1.getCep());
// console.log(commerce1.getFloorsQuantity());

// const industry1 = new Industry(28, "cepIndustry");
// console.log(industry1.getCep());

class ResidentialClient extends Residence implements Client {
  cpf: number;
  name: string;
  registrationNumber: number;
  consumedEnergy: number;
  residentsQuantity: number;
  cep: string;

  constructor(
    cpf: number,
    name: string,
    registrationNumber: number,
    consumedEnergy: number,
    residentsQuantity: number,
    cep: string
  ) {
    super(residentsQuantity, cep);
    this.cpf = cpf;
    this.name = name;
    this.registrationNumber = registrationNumber;
    this.consumedEnergy = consumedEnergy;
    this.residentsQuantity = residentsQuantity;
    this.cep = cep;
  }

  calculateBill(): number {
    return this.consumedEnergy * 0.75;
  }
}

// // const testResidencial = new ResidentialClient(0, "nome", 111, 222, 333, "cep")

// // console.log(testResidencial.calculateBill())
// // console.log(testResidencial.cep)
// // console.log(testResidencial.consumedEnergy)
// // console.log(testResidencial.cpf)
// // console.log(testResidencial.getCep())
// // console.log(testResidencial.getResidents())
// // console.log(testResidencial.name)
// // console.log(testResidencial.registrationNumber)
// // console.log(testResidencial.residentsQuantity)

class CommencialClient extends Commerce implements Client {
  public name: string;
  public registrationNumber: number;
  public consumedEnergy: number;
  floorsQuantity: number;
  cep: string;
  private cnpj: number;

  constructor(
    name: string,
    registrationNumber: number,
    consumedEnergy: number,
    floorsQuantity: number,
    cep: string,
    cnpj: number
  ) {
    super(floorsQuantity, cep);
    this.name = name;
    this.registrationNumber = registrationNumber;
    this.consumedEnergy = consumedEnergy;
    this.floorsQuantity = floorsQuantity;
    this.cep = cep;
    this.cnpj = cnpj;
  }

  calculateBill(): number {
    return this.consumedEnergy * 0.53;
  }

  public getCNPJ = (): number => {
    return this.cnpj;
  };
}

class IndustrialClient extends Industry implements Client {
  public name: string;
  public registrationNumber: number;
  public consumedEnergy: number;
  cep: string;
  machinesQuantity: number;
  private industrialRegister: number;

  constructor(
    name: string,
    registrationNumber: number,
    consumedEnergy: number,
    industrialRegister: number,
    cep: string,
    machinesQuantity: number
  ) {
    super(machinesQuantity, cep);
    this.name = name;
    this.registrationNumber = registrationNumber;
    this.consumedEnergy = consumedEnergy;
    this.cep = cep;
    this.machinesQuantity = machinesQuantity;
    this.industrialRegister = industrialRegister;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.3;
  }

  public getIndustrialRegister = (): number => {
    return this.industrialRegister;
  };
}
