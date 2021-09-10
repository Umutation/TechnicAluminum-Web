var navSelections = document.querySelectorAll("nav ul li");

var lines = document.querySelectorAll("nav ul li hr");

var burgerBut = document.querySelector(".burger");

var navBar = document.querySelector("nav");







function onMouseOver(index){

  
    index.lastChild.style.transition = "0.5s";
    index.lastChild.style.opacity = 1;


}


function mouseLeave(index){
    index.lastChild.style.transition = "0.5s";
    index.lastChild.style.opacity = 0;

}

function logoLinesOver(index){

    index.firstChild.style.transition ="0.5s"; 
    index.firstChild.style.opacity = 1;
    index.lastChild.style.transition = "0.5s";
    index.lastChild.style.opacity = 1;
}

function logoLinesLeave(index){

    
    index.firstChild.style.transition ="0.5s"; 
    index.firstChild.style.opacity = 0;
    index.lastChild.style.transition = "0.5s";
    index.lastChild.style.opacity = 0;
    
}


function menuAppear(){


    navBar.classList.toggle("comeBack");
}



burgerBut.addEventListener("click", function(){

    menuAppear();
});



