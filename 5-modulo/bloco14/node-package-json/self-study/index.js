const readline = require("readline-sync");
const fs = require("fs");
var buffer = new Buffer.alloc(1024);

// const nameUser = readline.question("Enter you name: ")
// const age = readline.question("Enter you age: ")

// const futureAge = Number(age) + 7

// if (nameUser && age){
//   console.log(`Olá, ${nameUser}! Você tem ${age} anos. Em sete anos você terá ${futureAge}`)
// } else {
//   console.log("ficou faltando alguma informação. Tente novamente.")
// }

const seeTaskList = readline.question(
  "Olá! Gostaria de ver suas tarefas? (Sim ou Não)"
);

if (seeTaskList.toLowerCase() === "sim") {
  console.log("Suas Tarefas:");

  fs.open("taskList.txt", "r+", function (err, fd) {
    if (err) {
      return console.error(err);
    }

    console.log("Reading the file");

    fs.read(fd, buffer, 0, buffer.length, 0, function (err, bytes) {
      if (err) {
        console.log(err);
      }
      console.log(buffer.slice(0, bytes).toString());

      let addTask = "sim";
      while (addTask === "sim") {
        addTask = readline.question("Você quer adicionar uma nova tarefa?");
        if (addTask.toLowerCase() === "sim") {
          const newTask = readline.question("Digite a tarefa");
          const organizedNewTask = newTask + ", ";

          fs.write(
            fd,
            organizedNewTask,
            buffer.slice(0, bytes).toString().length,
            null,
            function (err, writtenbytes) {
              if (err) {
                console.log("Cant write to file");
              } else {
                console.log("Sua nova lista de tarefas:");
                fs.read(fd, buffer, 0, buffer.length, 0, function (err, bytes) {
                  if (err) {
                    console.log(err);
                  }
                  console.log(buffer.slice(0, bytes).toString());
                });
                console.log(writtenbytes + " characters added to file");
              }
            }
          );
        } else {
          console.log("beleza");
        }
      }
    });
  });
} else {
  console.log("beleza");
}
