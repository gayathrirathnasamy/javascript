let task1 = () => {
  setTimeout(() => {
    console.log("inside timeout 1");
  }, 0);
  console.log("1");
  console.log("2");
  console.log("3");
  console.log("4");
};
let task2 = () => {
  setTimeout(() => {
    console.log("inside timeout 2");
  }, 0);
  console.log("11");
  console.log("12");
  console.log("13");
  console.log("14");
};

task1();
task2();
