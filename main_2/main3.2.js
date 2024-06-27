function countdown(sec) {
  let count = sec;
  let intervalId = setInterval(() => {
    if (count > 0) {
      console.log(`осталось ${count} секунд`);
      count--;
    } else {
      console.log("Время вышло");
      clearInterval(intervalId);
    }
  }, 1000);
}

countdown(5);

function countdownTime(sec) {
  let count = sec;
  let timeoutId = setTimeout(() => {
    if (count > 0) {
      console.log(`Осталось ${count} секунд`);
      count--;
      countdownTime(count);
    } else {
      console.log("Время вышло");
    }
  }, 1080);
}

countdownTime(6);
