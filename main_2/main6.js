//
const getAverage = (marks) => {
  const sum = marks.reduce((acc, mark) => acc + mark, 0);
  const length = marks.length;
  return Math.round(sum / length);
};
console.log(getAverage([5, 4, 3, 5, 2, 4, 3, 2, 4]));

function getAverage2(marks) {
  let sum = 0;
  marks.forEach((element) => {
    sum += element;
  });
  return Math.floor(sum / marks.length);
}
console.log(getAverage2([5, 4, 3, 5, 2, 4, 3, 2, 4]));

function buildFun(n) {
  let res = [];

  for (let i = 0; i < n; i++) {
    res.push(function () {
      return i;
    });
  }
  return res;
}
buildFun(8);
