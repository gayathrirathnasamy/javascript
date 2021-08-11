Function.prototype.bind1 = function (context) {
  const currentContext = this;
  const currentArgs = Array.prototype.slice.call(arguments, 1);
  return function () {
    const args = Array.prototype.slice.call(arguments);
    currentContext.apply(context, currentArgs.concat(args));
  };
};

const obj1 = {
  x: 10,
  printx: function () {
    return this.x;
  }
};
const obj2 = {
  x: 15
};

var bindX = obj1.printx.bind1(obj2);
bindX();

const debounce = (fn, delay) => {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const throttle = (fn, delay) => {
  let inThrottle = true;
  return function () {
    const context = this;
    const args = arguments;
    if (inThrottle) {
      fn.apply(context, args);
      inThrottle = false;
      setTimeout(() => {
        inThrottle = true;
      }, delay);
    }
  };
};
