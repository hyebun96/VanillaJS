// DomFunction

// document는 대표하는 HTML을 뿌려줌
console.log(document);

console.log(document.getElementById("title"));
console.error("Fuc*");

// DOM(Document Object Model)
// JS로 선택한 객체가 됌
const title = document.getElementById("title");
title.innerHTML = "Hi HTML!";

console.log(title);

// Modefying the DOM with JS
console.dir(title);
title.style.color ="red";

console.dir(document);
document.title = "I Own you now";

// document에서 찾는 함수
const title2 = document.querySelector("#title");
console.log(title2);