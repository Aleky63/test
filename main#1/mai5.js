const IN_PROGRESS = "In Progress";
const DONE = "Done";
const TO_DO = "To Do";
const WANT = "Want";

const list = {
  "create a new practice task": IN_PROGRESS,
  "make a bed": DONE,
  "write a post": TO_DO,
  "brush teeth": IN_PROGRESS,
  "want to want": WANT,
};

console.log(list);

const changeStatus = (name, status) => {
  list[name] = status;
};
changeStatus("write a post", TO_DO);
changeStatus("create a new practice task", TO_DO);
changeStatus("make a bed", TO_DO);
changeStatus("brush teeth", DONE);

const addTask = (name, status = TO_DO) => {
  list[name] = status;
};
addTask("jogging", IN_PROGRESS);
addTask("sing");

console.log(list);

const deleteTask = (name) => {
  delete list[name];
};

deleteTask("create a new practice task");
deleteTask("want to want");

console.log(list);

const showList = () => {
  console.log(list);
};

showList();

const showListBonus = () => {
  const arrList = [TO_DO, IN_PROGRESS, DONE, WANT];

  for (let i = 0; i < arrList.length; i++) {
    console.log(`${arrList[i]}:`);

    let hasTasks = false;
    for (key in list) {
      if (list[key] === arrList[i]) {
        hasTasks = true;
        console.log(`\t\t${key}`);
      }
    }
    if (!hasTasks) {
      console.log(`\t\t-`);
    }
  }
};
showListBonus();
