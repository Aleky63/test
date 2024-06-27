const toDoList = {
  "Проснуться и принять душ": "To do",
  Позавтракать: "To do",
  "Выполнить задание по программированию": "To do",
  "Поехать на работу": "In progress",
};

//Изменение статуса задачи

function changeStatus(task, status) {
  if (toDoList[task]) {
    toDoList[task] = status;
    console.log(`Статус задачи ${task} изменён на ${status}`);
  } else {
    console.log(`Задача ${task} не найдена`);
  }
}

//Добавление задачи

function addTask(task) {
  if (!toDoList[task]) {
    toDoList[task] = "Выполнено";
    console.log(`Задача ${task} добавлена`);
  } else {
    console.log(`Задача ${task} уже была добавлена`);
  }
}

//Удаление задачи

function deleteTask(task) {
  if (toDoList[task]) {
    delete toDoList[task];
    console.log(`Задача ${task} удалена`);
  } else {
    console.log(`Задача ${task} не найдена`);
  }
}

//Вывод списка в консоль

function showList() {
  for (const task in toDoList) {
    console.log(`${task}: ${toDoList[task]}`);
  }
}

changeStatus("Поехать на работу", "To do");
changeStatus("Проснуться и принять душ", "In progress");
deleteTask("Позавтракать");
showList();
