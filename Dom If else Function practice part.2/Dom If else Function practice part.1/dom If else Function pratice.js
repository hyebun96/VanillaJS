const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

// className
function handleClick(){
    const currentClass = title.className;
    
    if(currentClass !== CLICKED_CLASS){
        title.className = CLICKED_CLASS;
    }else{
        title.className = "";
    }
}

// classList
function handleClick2(){
    const hasClass = title.classList.contains(CLICKED_CLASS);
    
    if(!hasClass){
        title.classList.add(CLICKED_CLASS);
    }else{
        title.classList.remove(CLICKED_CLASS);
    }
}

// toggle
function handleClick3(){
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleClick3);
}

init();
