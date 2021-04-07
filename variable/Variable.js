// let
let a = 221;
let b = a -5;
a = 4;  
console.log(b, a);

//const
// 12줄, Uncaught TypeError: Assignment to constant variable.
const c = 221;
let d = c -5;
c= 4;               
console.log(c, d);

// var
var e = 221;
var f = e - 5;
e = 4;
console.log(e, f);