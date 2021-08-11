function* yieldEg() {
  /*expression paused here and return
  value is undefined as nothing is declared*/
  yield;
  generatorFn(yield "yeild 1");
}
function generatorFn(str) {
  console.log(str);
}

var generator = yieldEg();

console.log(generator.next());

console.log(generator.next().value);
console.log(generator.next())