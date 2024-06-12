

export function setDetails() {

    let barreAfter = document.querySelector(".prenom-barre");
    barreAfter.style.borderRadius = `${barreAfter.clientHeight/2}px`; 

    let barreMedia = document.querySelector(".social-media");
    barreMedia.style.borderRadius = `${barreMedia.clientHeight/2}px`; 

    let projectsPlus = document.querySelectorAll(".project-plus");
    for(let projectPlus of projectsPlus){
        projectPlus.style.borderRadius = `${projectPlus.clientHeight/2}px`
    }
}
