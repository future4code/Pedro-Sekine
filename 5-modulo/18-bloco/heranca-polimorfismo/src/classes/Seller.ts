import { Employee } from "./Employee";

export class Seller extends Employee {
  private salesQuantity: number = 0;
  static COMISSION_PER_SALE: number = 5;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    admissionDate: string,
    baseSalary: number
  ) {
    super(id, email, name, password, admissionDate, baseSalary);
  }

  public setSalesQuantity = (amountSold: number): void => {
    this.salesQuantity = amountSold;
  };

  public getSalesQuantity = (): number => {
    return this.salesQuantity;
  };

  public getTotalSalary = (): number => {
    const totalSalary =
      this.baseSalary + 400 + this.salesQuantity * Seller.COMISSION_PER_SALE;
    return totalSalary;
  };
}
