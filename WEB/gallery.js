var sections = document.querySelectorAll(".galleryGrid ul"); 


var index =  0; 

var leftButton = document.querySelector(".lB");

var rightButton = document.querySelector(".rB");

var isLeft = null;



function indexArrange(){

 
    console.log("HET");
}

arrange(index, isLeft);





function increaseIndex(){

    index++; 
    isLeft = false; 
    if(index>sections.length-1){

        index = 0;
    }
    arrange(index, isLeft);

   
    

}


function decreaseIndex(){

    index--; 
    isLeft = true;
    if(index<0){

        index=sections.length-1;
    }
    arrange(index, isLeft);

   
}


function arrange(index,direction){ 

    
    console.log(index);

    for(var i = 0; i<sections.length; i++){

        
      
        if(i==index+1||i==index-1||(index==0&&i==sections.length-1)||(index==sections.length-1&&i==0)){

            sections[i].style.transition = "1s";
            sections[i].style.display = "grid";
            sections[i].style.opacity = 0.55;

            sections[i].style.gridRow = 1;

           
         
            if(i==index-1||(index==0&&i==sections.length-1)){
              
               

                sections[i].style.gridColumn = 1; 
 
            }else if(i==index+1||(index==sections.length-1&&i==0)){
         

                sections[i].style.gridColumn = 3; 
               
 
            }

            for(var k = 0; k<sections[i].children.length; k++){

                if(k==0){
                    
                        sections[i].children[k].children[0].style.transition = "1s";

                        sections[i].children[k].children[0].style.fontSize="20px";
                    
                  

                }else{
                    sections[i].children[k].children[0].style.transition = "0.5s";

                    sections[i].children[k].children[0].style.width="15vh";
                        // sections[i].children[k].children[0].style.blur = "1100px";
                }
               

            }

            // sections[i].style.gridTemplateColumns = "repeat(2, 20vh)";
            
       
        }else if(i==index){
            sections[i].style.transition = "1s";
            sections[i].style.display = "grid";
            sections[i].style.opacity = 1;
            sections[i].style.gridColumn = 2;
            
          


            for(var k = 0; k<sections[i].children.length; k++){

                if(k==0){
                    
                    if(i==0){
                        sections[i].children[k].children[0].style.transition = "1s";
                        sections[i].children[k].children[0].style.fontSize="1.7em";
                    }else{
                        sections[i].children[k].children[0].style.transition = "1s";
                        sections[i].children[k].children[0].style.fontSize="2em";

                    }
                  

                }else{
                    sections[i].children[k].children[0].style.transition = "1s";
                    sections[i].children[k].children[0].style.width="22vh";
                        // sections[i].children[k].children[0].style.blur = "1100px";
                }
               

            }

        }else if(i>index+1||i<index-1){

            sections[i].style.display = "none";
        }
    }   
}

rightButton.addEventListener("click", function(){

   increaseIndex();

});


leftButton.addEventListener("click", function(){

    decreaseIndex();
});


