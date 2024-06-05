const INPROGRESS = "In Progress";
const DONE = "Done";
const TODO = "To Do";

const list = {
  "create a new practice task": INPROGRESS,
  "make a bed": DONE,
  "write a post": TODO,
  cleaning: INPROGRESS,
};

function changeStatus(name, status) {
  list[name] = status;
}
changeStatus("write a post", INPROGRESS);
changeStatus("create a new practice task", TODO);
changeStatus("make a bed", TODO);

function addTask(name, status) {
  list[name] = status;
}
addTask("have a walk");

function deleteTask(name) {
  delete list[name];
}
deleteTask("cleaning");
deleteTask("have a walk");

function showList() {
  console.log(list);
}

showList();
