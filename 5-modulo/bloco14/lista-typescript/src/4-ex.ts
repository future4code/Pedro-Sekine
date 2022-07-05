enum SETORES {
  MARKETING = "marketing",
  VENDAS = "vendas",
  FINANCEIRO = "financeiro",
}

type TypeWorker = {
  name: string;
  salary: number;
  division: string;
  inPerson: boolean;
};

const filterInPersonMarketing = (allWorkers: TypeWorker[]): TypeWorker[] => {
  const dividedWorkers: TypeWorker[] = allWorkers.map((employee) => {
    switch (employee.division) {
      case "marketing":
        employee.division = SETORES.MARKETING;
        break;
      case "vedas":
        employee.division = SETORES.VENDAS;
        break;
      case "financeiro":
        employee.division = SETORES.FINANCEIRO;
        break;
    }
    return employee
  });
  const filteredArray: TypeWorker[] = dividedWorkers.filter((employee) => {
    return employee.division === "marketing" && employee.inPerson === true;
  });

  return filteredArray;
};

const allEmployees: TypeWorker[] = [
  { name: "Marcos", salary: 2500, division: "marketing", inPerson: true },
  { name: "Maria", salary: 1500, division: "vendas", inPerson: false },
  { name: "Salete", salary: 2200, division: "financeiro", inPerson: true },
  { name: "João", salary: 2800, division: "marketing", inPerson: false },
  { name: "Josué", salary: 5500, division: "financeiro", inPerson: true },
  { name: "Natalia", salary: 4700, division: "vendas", inPerson: true },
  { name: "Paola", salary: 3500, division: "marketing", inPerson: true },
];

console.table(filterInPersonMarketing(allEmployees));
