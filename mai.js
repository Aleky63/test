const IN_PROGRESS = "In Progress";
const DONE = "Done";
const TO_DO = "To Do";

const list = {
  "create a new practice task": IN_PROGRESS,
  "make a bed": DONE,
  "write a post": TO_DO,
};

function showList() {
  function showCategory(category) {
    let flag = false;
    console.log(`${category}:`);
    for (item in list) {
      if (list[item] === category) {
        console.log(`\t"${item}"`);
        flag = true;
      }
    }
    if (flag === false) console.log("\t-");
  }

  showCategory(TO_DO);
  showCategory(IN_PROGRESS);
  showCategory(DONE);
}

function changeStatus(task_name, status) {
  if (task_name in list) {
    list[task_name] = status;
  } else {
    console.error("\nError: there is no task with this name\n");
  }
}

function addTask(task_name, status = IN_PROGRESS) {
  if (task_name in list) {
    console.error("\nError: a task with the same name already exist\n");
  } else {
    list[task_name] = status;
  }
}

console.log(calc("5", 4, "add"));
console.log(calc(5, 4, "multi"));
console.log(calc(5, 4, "subtract"));
console.log(calc(4, 0, "divide"));
console.log(calc(4, 2, "divide"));
function deleteTask(task_name) {
  if (task_name in list) {
    delete list[task_name];
  } else {
    console.error("\nError: there is no task with this name\n");
  }
}

console.log("\n=================");
showList();
changeStatus("make a bed", TO_DO);
changeStatus("make bed", DONE);

addTask("walk the dog");
addTask("make a bed");

deleteTask("write a post");
deleteTask("write post");
showList();
