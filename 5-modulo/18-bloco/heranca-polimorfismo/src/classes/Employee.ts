import { User } from "./User";

export class Employee extends User {
  protected adimissionDate: string;
  protected baseSalary: number;
  static BENEFITS_VALUE: number = 400

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    admissionDate: string,
    baseSalary: number
  ) {
    super(id, email, name, password);
    this.adimissionDate = admissionDate;
    this.baseSalary = baseSalary;
    // this.calculateTotalSalary = this.baseSalary + 400
  }

  public getAdmissionDate = (): string => {
    return this.adimissionDate;
  };

  public getBaseSalary = (): number => {
    return this.baseSalary;
  };

  public getTotalSalary = (): number => {
    // return this.calculateTotalSalary
    return this.baseSalary + Employee.BENEFITS_VALUE
  }

}
