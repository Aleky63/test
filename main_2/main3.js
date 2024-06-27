function countDownTime(sec) {
  sec--;

  if (sec > 0) {
    setTimeout(() => countDownTime(sec), 1000);
    console.log(`осталось секунд: ${sec}`);
  } else {
    console.log("время вышло");
  }
}
countDownTime(5);
