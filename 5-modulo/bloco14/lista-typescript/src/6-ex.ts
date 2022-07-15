type Customer = {
  cliente: string;
  saldoTotal: number;
  debitos: number[];
};

// entrada
const customers: Customer[] = [
  { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, debitos: [] },
];

const setLoanBar = (allCustomers: Customer[]): Customer[] => {
  const allCustomersUpdatedBalance: Customer[] = allCustomers.map(
    (customer) => {
      const totalDebt = customer.debitos.reduce((a, b) => a + b, 0);
      customer.saldoTotal = customer.saldoTotal - totalDebt
      customer.debitos = []
      return customer
    }
  );
  const filteredCustomers:Customer[] = allCustomersUpdatedBalance.filter(customer => {
    return( customer.saldoTotal < 0)
  })

  return filteredCustomers
};

console.log(setLoanBar(customers))