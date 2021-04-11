if(10 > 5){
    console.log("hi");
} else {
    console.log("ho");
}

if(10 == 5){
    console.log("hi");
} else {
    console.log("ho");
}

if(true){
    console.log("hi");
} else {
    console.log("ho");
}

if("hyebun" == "hyebun"){
    console.log("hi");
} else {
    console.log("ho");
}

// String == Number
if("10" == 10){
    console.log("hi");
} else if("10" == "10") {
    console.log("lalala");
}else{
    console.log("ho");
}

// Operation 피연산자
if(20 > 5 && "hyebun" == "hyebun"){
    console.log("yes");
}else{
    console.log("no");
}

if(20 > 5 || "hyebun" == "hyebun"){
    console.log("yes");
}else{
    console.log("no");
}

//=======================================

// Prompt
// prompt("Ask something");

const age = prompt("How old are you?");
console.log(age);

if(age > 18 &&  age <= 21){
    console.log('you can drink but you shold not');
} else if(age>21){
    console.log("go ahead");
} else {
    console.log('too young');
}

//=======================================
