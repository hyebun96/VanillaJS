// Comment
/**
 * Comment multi line
 * 
 */

// String : text
const what = "hyebunJeong";
const emoji = "😊";
const today = "2021.04.07";
console.log(what);
console.log(emoji);

// Boolean : true or false
const boo1 = true;
const boo2 = false;
console.log(boo1 , boo2);

// Number : 숫자
const num = 666;
console.log(num);

// Float : floating number, 소숫점숫자
const flo = 55.1;
console.log(flo);

// data sorting
const monday = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";

console.log(monday, tue, wed, thu, fri);

// Array
const someting = "Something";
const dayOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", true, 54, someting];
console.log(dayOfWeek);
console.log(dayOfWeek[2]);
console.log(dayOfWeek[432]);    // undefined


// privacy data
const hyebunInfo = ["hyebun", 26, true, "Seoul"];
console.log(hyebunInfo);    //  Array는 비효율


// Object
// favFood Object는 Array[] 안에 다시 Object{}를 이용해서  Data를 정리
const hyebunInfo2 = {
    name: "hyebun",
    age : 26,
    gender : "Female",
    favMovies : ["RaRaLand", "Oldboy"],
    favFoods : [
        {
            name: "Apple", 
            fatty: false
        }, 
        {
            name: "Cheese burger", 
            fatty: true
        }
    ]
}
console.log(hyebunInfo2.name);  
console.log(hyebunInfo2.age);  
hyebunInfo2.gender = "Male";

console.log(hyebunInfo2.gender); 
console.log(hyebunInfo2.favFoods[0].name); 
console.log(hyebunInfo2);
