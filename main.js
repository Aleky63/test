const IN_PROGRESS = "In Progress";
const DONE = "Done";
const TO_DO = "To Do";
const WANT = "Want";
const DRINK = "Drink";

const arrList = [
  { name: "create a new practice status", status: IN_PROGRESS },
  { name: "make a bed", status: DONE },
  { name: "write a post", status: TO_DO },
  { name: "write ", status: IN_PROGRESS },
];

const arrTask = [IN_PROGRESS, DONE, TO_DO, WANT, DRINK];

const addTask = (newName) => {
  const objTask = {
    name: newName,
    status: DRINK,
  };
  arrList.unshift(objTask);
};
addTask("pour some water");

console.log(arrList);
console.log("------");

const showList = () => {
  arrTask.forEach((status) => {
    console.log(status + ":");

    const tasks = arrList.filter((task) => task.status === status);
    tasks.length === 0
      ? console.log(`\t-`)
      : tasks.map((task) => console.log(`\t${task.name} `));
  });
};
showList();
console.log("------");

const deleteTask = (name) => {
  const index = arrList.findIndex((task) => task.name === name);
  if (index === -1) {
    console.log("ERROR");
  } else {
    arrList.splice(index, 1);
    console.log(`Task '${name}' deleted`);
  }
};

deleteTask("write a post");
deleteTask("wwwww");
console.log("------");
showList();
console.log(arrList);

const changeStatus = (name, status) => {
  let indexMoveTask = arrList.findIndex((task) => task.name === name);
  arrList[indexMoveTask] = { name, status };
};

changeStatus("make a bed", IN_PROGRESS);
console.log(arrList);
