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