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
  { name: "pour some water", status: STATUSES.DRINKING },
];

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

  // if (!foundTask) {
  //   console.log("Такой задачи нет");
  // }

  if (foundTask === false) {
    console.log("Такой задачи нет");
  }
};

changeStatus("make a ", STATUSES.IN_PROGRESS);
changeStatus("pour some water", STATUSES.DRINKING);
changeStatus("make a bed", STATUSES.IN_PROGRESS);
console.log(arrList);
