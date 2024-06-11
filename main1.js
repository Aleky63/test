const STATUSES = {
  IN_PROGRESS: "In progress",
  DONE: "Done",
  TO_DO: "To Do",
  WANT: "Want",
  DRINKING: "Drinking",
};

let arrList = [
  { name: "create a new practice status", status: STATUSES.IN_PROGRESS },
  { name: "make a bed", status: STATUSES.DONE },
  { name: "write a post", status: STATUSES.TO_DO },
  { name: "write ", status: STATUSES.WANT },
  { name: "drink after ", status: STATUSES.WANT },
];

const addTask = (newName) => {
  const objTask = {
    name: newName,
    status: STATUSES.DRINKING,
  };
  arrList.unshift(objTask);
};
addTask("pour some water");

console.log(arrList);
console.log("------");

const showList = () => {
  Object.keys(STATUSES).forEach((status) => {
    console.log(STATUSES[status] + ":");

    const tasks = arrList.filter((task) => task.status === STATUSES[status]);
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

console.log(arrList);

const changeStatus = (name, status) => {
  let foundTask = false;
  arrList.forEach((task) => {
    if (task.name === name) {
      foundTask = true;
      if (task.status === status) {
        console.log(`Задача "${name}" уже имеет статус: ${status}`);
      } else {
        task.status = status;
      }
    }
  });

  if (!foundTask) {
    console.log("Такой задачи нет");
  }
};

changeStatus("make a ", STATUSES.IN_PROGRESS);
changeStatus("pour some water", STATUSES.DRINKING);
changeStatus("make a bed", STATUSES.IN_PROGRESS);
console.log(arrList);
showList();
