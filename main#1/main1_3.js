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
  { name: "pour some water", status: DRINK },
];

const arrTask = [IN_PROGRESS, DONE, TO_DO, WANT, DRINK];

function showListBonus() {
  arrTask.forEach((status) => {
    console.log(status + ":");

    const tasks = arrList.filter((task) => task.status === status);

    tasks.length === 0
      ? console.log(`\t-`)
      : tasks.map((task) => console.log(`\t${task.name} `));
  });
}
showListBonus();

const showListBonusNew = () => {
  const inProgressTasks = arrList.filter((el) => el.status === IN_PROGRESS);
  const doneTasks = arrList.filter((el) => el.status === DONE);
  const todoTasks = arrList.filter((el) => el.status === TO_DO);
  const wantTasks = arrList.filter((el) => el.status === WANT);
  const drinkTasks = arrList.filter((el) => el.status === DRINK);

  console.log(arrTask[0] + ":");

  inProgressTasks.length === 0
    ? console.log(`\t-`)
    : inProgressTasks.forEach((task) => {
        console.log(`\t${task.name}`);
      });

  console.log(DONE + ":");

  doneTasks.length === 0
    ? console.log(`\t-`)
    : doneTasks.forEach((task) => {
        console.log(`\t${task.name}`);
      });

  console.log(TO_DO + ":");

  todoTasks.length === 0
    ? console.log(`\t-`)
    : todoTasks.forEach((task) => {
        console.log(`\t${task.name} `);
      });

  console.log(WANT + ":");

  wantTasks.length === 0
    ? console.log(`\t-`)
    : wantTasks.forEach((task) => {
        console.log(`\t${task.name} `);
      });

  console.log(DRINK + ":");

  drinkTasks.length === 0
    ? console.log(`\t-`)
    : drinkTasks.forEach((task) => {
        console.log(`\t${task.name} `);
      });
};

showListBonusNew();
