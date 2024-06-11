const IN_PROGRESS = "In Progress";
const DONE = "Done";
const TO_DO = "To Do";
const WANT = "Want";
const DRINKING = "Drinking";

let arrList = [
  { name: "create a new practice status", status: IN_PROGRESS },
  { name: "make a bed", status: DONE },
  { name: "write a post", status: TO_DO },
  { name: "write ", status: WANT },
  { name: "drink after ", status: WANT },
  { name: "pour some water", status: DRINKING },
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

  if (!foundTask) {
    console.log("Такой задачи нет");
  }
};

// // console.log(arrList);

changeStatus("make a ", IN_PROGRESS);
changeStatus("pour some water", DRINKING);
changeStatus("make a bed", IN_PROGRESS);
console.log(arrList);
