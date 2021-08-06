import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const debounce = (fn, limit) => {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timeout); //every call cleartimout
    timeout = setTimeout(() => {
      fn.apply(context, args);
    }, limit);
  };
};

const throttle = (fn, limit) => {
  let inThrottle = true;
  return function () {
    let context = this;
    let args = arguments;
    if (inThrottle) {
      fn.apply(context, args); //calls once for 1st time since inThrottle set to true & works only on continuous user interaction
      inThrottle = false;
      setTimeout(() => {
        inThrottle = true;
      }, limit);
    }
  };
};

document.getElementById("btn").addEventListener(
  "click",
  debounce(function () {
    console.log("Printing");
  }, 1000)
);

//Closure example
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y;
}

var z = x();
console.log(z);
z();

//Bind polyfill and example
Function.prototype.newbind = function (context) {
  var currentContext = this;
  var currentArgs = Array.prototype.slice.call(arguments, 1);
  return function () {
    var args = Array.prototype.slice.call(arguments);
    currentContext.apply(context, currentArgs.concat(args));
  };
};

let obj1 = {
  x: 2,
  printX: function () {
    console.log(this.x);
  }
};
let obj2 = {
  x: 5
};
let bindCheck = obj1.printX.newbind(obj2);
bindCheck();
