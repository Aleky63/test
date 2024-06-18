const STATUSES = {
  IN_PROGRESS: "In progress",
  DONE: "Done",
  TO_DO: "To Do",
  WANT: "Want",
  DRINKING: "Drinking",
};

let arrList = [
  { name: "create a new practice status", status: STATUSES.IN_PROGRESS },
  { name: "make a bed", status: STATUSES.TO_DO },
  { name: "write a post", status: STATUSES.TO_DO },
  { name: "write ", status: STATUSES.WANT },
  { name: "drink after ", status: STATUSES.WANT },
  { name: "pour some water", status: STATUSES.DRINKING },
];

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
