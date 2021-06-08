var iife = () => {
  for (var i = 1; i <= 5; i++) {
    setTimeout(
      (i) => {
        console.log(i);
      },
      i * 1000,
      i
    );
  }
};

iife();

var iife1 = () => {
  for (var i = 1; i <= 5; i++) {
    setTimeout(
      (() => {
        console.log(i);
      })(i),
      i * 1000
    );
  }
};

//iife1();
