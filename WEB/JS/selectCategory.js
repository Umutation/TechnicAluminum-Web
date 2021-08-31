var sections = document.querySelectorAll(".projectsGrid ul li");



projectSelection = 0; 


function selectProject(index){

    for(var i = 0; i<sections.length; i++){


        if(sections[i]==index){

            projectSelection = i;
        }

    }


    console.log(projectSelection);
}
