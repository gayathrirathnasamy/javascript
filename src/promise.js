let getPromises = (promises, count) => {
  return new Promise((resolve, reject) => {
    let arr = [];
    for (let i = 0; i < promises.length; i++) {
      promises[i].then((response) => {
        arr.push(response);
        if (arr.length === count) {
          resolve(arr);
        }
      });
    }
  });
};

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 3000);
});

let p = getPromises([p1, p2, p3], 2);
p.then((resp) => console.log(resp));
