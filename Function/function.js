// Function

// console =>  Object
// log => Key(내장함수)
console.log(console); 

// 함수정의
// name => argument
function sayHello(name, age){
    console.log('Hello!', name, " you have ", age, " your of age.");
}

sayHello("Hyebun", 15);
console.log("Hi!");

// More Function Fun 
// `__` (백틱)

function sayHi(name, age){
    return `Hi ${name} you are ${age} years old`;
}

sayHello("Hyebun", 15);

const greetHyebun = sayHi("hyebun", 26);
console.log(greetHyebun);

const calculator = {
    plus : function(a,b){
        return a + b;
    },
    minus : function(a,b){
        return a-b;
    },
    multiple: function(a,b){
        return a*b;
    },
    divide : function(a,b){
        return a/b;
    },
    remainder : function(a,b){
        return a%b;
    },
    powerOf : function(a,b){
        return a**b;
    }
}

const plus = calculator.plus(5,5);
const minus = calculator.minus(5,5);
const multiple = calculator.multiple(5,5);
const divide = calculator.divide(5,5);
const remainder = calculator.remainder(5,5);
const powerOf = calculator.powerOf(5,5);

console.log(plus, minus, multiple, divide, remainder, powerOf);