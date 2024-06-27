const toDoList = ["почитать", "помыть посуду", "помыть машину", "попрыгать"];

toDoList.push("танцевать", "петь");
console.log(toDoList);

toDoList.pop();
console.log(toDoList);

toDoList.unshift("глядеть", "бухтеть");
console.log(toDoList);

toDoList.shift();
console.log(toDoList);

for (const task of toDoList) {
  console.log(task);
}

const myName = "Papa";
const newArray = toDoList.concat(myName);
console.log(newArray);

let firstTwoTasks = toDoList.slice(0, 3);
console.log(toDoList);
console.log(firstTwoTasks);

let deletedTask = toDoList.splice(3, 1);
console.log(toDoList);
console.log(deletedTask);

toDoList.splice(3, 2, "ловить бабочек", "ловить мух");
console.log(toDoList);

for (const task of toDoList) {
  console.log(task);
}
