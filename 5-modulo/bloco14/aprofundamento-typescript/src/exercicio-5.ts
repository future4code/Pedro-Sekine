type consulta = {
  nome: string;
  idade: number;
  dataDaConsulta: string;
}[];

const consultasArray: consulta = [
  { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
  { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
  { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
  { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" },
];

// const consultasOrganizadas: consulta = consultasArray.sort(function (a, b) {
//   const x = a.nome.toLowerCase();
//   const y = b.nome.toLowerCase();
//   if (x < y) {
//     return -1;
//   } else if (y < x) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

const organizaConsultas = (arrayDeConsultas:consulta):consulta => {
  const consultasOrganizadas: consulta = arrayDeConsultas.sort(function (a, b) {
    const x = a.nome.toLowerCase();
    const y = b.nome.toLowerCase();
    if (x < y) {
      return -1;
    } else if (y < x) {
      return 1;
    } else {
      return 0;
    }
  })
  return consultasOrganizadas
}


const minhasConsultasOrganizadas:consulta = organizaConsultas(consultasArray)

console.log(minhasConsultasOrganizadas)