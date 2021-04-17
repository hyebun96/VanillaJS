const title = document.querySelector("#title");

// const BASE_COLOR = "#34495e"; 
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#fab1a0";

function handleClick(){
    //console.log(title.style.color);

    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }else{
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;

    // click : mouse click
    // title.addEventListener("click", handleClick);

    // mouseenter : mouse in/out
    title.addEventListener("mouseenter", handleClick);
}

init();

function handleOffline(){
    console.log('Bye Bye~:-)');
}

function handleOnline(){
    console.log("Welecome back online!!");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);