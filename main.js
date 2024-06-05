const STATUSES = {
  TODO: "todo",
  IN_PROGRESS: "in_progress",
  DONE: "done",
};

const { TODO, IN_PROGRESS, DONE } = STATUSES;

const taskList = {
  0: {
    title: "сделать зарядку",
    status: TODO,
  },
  1: {
    title: "помыть посуду",
    status: DONE,
  },
  2: {
    title: "задача из страды",
    status: IN_PROGRESS,
  },
  3: {
    title: "прочитать Грокаем алгоритмы",
    status: IN_PROGRESS,
  },
};

let lastId = Math.max(...Object.keys(taskList));

function rightStatus(status) {
  return status === TODO || status === DONE || status === IN_PROGRESS;
}

function addTask(title, status) {
  if (rightStatus(status)) {
    lastId++;
    return (taskList[lastId] = { title, status });
  } else {
    console.log("Данный статус некорректен, используйте пожалуйста корректный");
  }
}

function show() {
  for (task in taskList) {
    console.log(
      `Задача #${task} ${taskList[task].title} в статусе ${taskList[task].status}`
    );
  }
}

function deleteTask(id) {
  if (id in taskList) {
    delete taskList[id];
    console.log(`Задача #${id} удалена`);
  } else {
    console.log(`Задача #${id} не найдена`);
  }
}

addTask("убраться на столе", "todo");
addTask("пробежка", "upcoming");
show();
deleteTask(1);
deleteTask(1);
show();
