


export function headerSetup() {
   
    let header = document.querySelector(".selecteur");
    header.style.borderRadius = `${header.clientHeight/2}px`; 

    let navs = document.querySelectorAll(".nav");

    for (let nav of navs){
        let selecteur = document.querySelector(".selecteur");

        nav.addEventListener('mouseenter', () => {
            
            let num = parseInt(nav.dataset.num);
            let offset = 0;
            for (let i = 1 ; i < num ; i++){
                offset += document.querySelector(`.nav${i}`).clientWidth;
            }

            selecteur.style.width = `${nav.clientWidth}px`;
            selecteur.style.left = `${offset}px`;
        });

        nav.addEventListener('mouseleave', () => {
            
            selecteur.style.width = `100%`;
            selecteur.style.left = `0`;
        });
    }

    navSetup();
}


function navSetup(){

    // Accueil

    // A propos

    // Projects

    // Skills
    
    // Contact

}


