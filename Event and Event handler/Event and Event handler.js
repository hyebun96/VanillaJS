// Event and Event handler

const title = document.querySelector("#title");

function hadnlerResize(){
    console.log("I have been resized.");
}

// handleResize()는 function을 즉시 호출
window.addEventListener("resize", handleResize());

function handleResize(event){
    console.log(event);
}

// event 발생할 때마다, 어떤 event에 반응했는지 console에 출력
window.addEventListener("resize", handleResize());

function handleClick(){
    title.style.color = "white";
}

title.addEventListener("click", handleClick);


