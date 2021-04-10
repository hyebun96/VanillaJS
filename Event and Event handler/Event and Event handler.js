// Event and Event handler

const title = document.querySelector("#title");

function handleResize(){
    console.log("I have been resized.");
}

// handleResize()는 function을 즉시 호출
window.addEventListener("resize", handleResize());

function handleResize(event){
    console.log(event);
}

// event 발생할 때마다, 어떤 event에 반응했는지 console에 출력
window.addEventListener("resize", handleResize);

function handleClick(){
    title.style.color = "white";
    title.innerHTML = "Just do it.";
}

title.addEventListener("click", handleClick);


//================================================================
const buttonElement = document.getElementById('btn');

// 콜백 함수를 제공함으로서 '클릭' 이벤츠를 처리하는 핸들러 추가
// 엘리먼트가 클릭될 때마다, '누름!' 팝업이 나타날 것
buttonElement.addEventListener('click',function(evnet){
    alert('누름!');
});

// 호환성을 위해서, 함수가 아닌 'handleEEvent' 속성을 가진 오브젝트도 똑같이 처리
buttonElement.addEventListener('click',{
    handleEvent: function(event){
        alert('handleEvent 함수로 누름!');
    }
});