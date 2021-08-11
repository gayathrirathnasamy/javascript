function numberFunction() {
  var numberArray = [];
  var number;
  for (number = 0; number < 4; number++) {
    numberArray[number] = function () {
      return number;
    };
  }
  return numberArray;
}
//numberFunction();

var y = 10;
function fn1() {
  var x = 15;
  function fn2() {
    console.log(x);
  }
  function fn3() {
    console.log(y);
  }
  fn2();
  fn3();
}
//fn1();
