


export function headerSetup() {
   
    let header = document.querySelector(".selecteur");
    header.style.borderRadius = `${header.clientHeight/2}px`; 

    let navs = document.querySelectorAll(".nav");

    for (let nav of navs){
        let selecteur = document.querySelector(".selecteur");

        nav.addEventListener('mouseenter', () => {
            
            selecteur.style.width = `${nav.clientWidth}px`;
            selecteur.style.left = `${nav.clientWidth * parseInt(nav.dataset.num)}px`;
        });

        nav.addEventListener('mouseleave', () => {
            
            selecteur.style.width = `100%`;
            selecteur.style.left = `0`;
        });
    }

}