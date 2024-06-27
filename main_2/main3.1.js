function countDownInterval(sec) {
  const intervalId = setInterval(() => {
    sec--;

    if (sec > 0) {
      console.log(`осталось секунд: ${sec}`);
    } else {
      clearInterval(intervalId);
      console.log("время вышло");
    }
  }, 1000);
}

countDownInterval(6);

// let sec = 6;
// const intervalId = setInterval(function () {
//   sec--;

//   if (sec > 0) {
//     console.log(`осталось секунд: ${sec}`);
//   } else {
//     console.log("время вышло");
//     clearInterval(intervalId);
//   }
// }, 1000);
