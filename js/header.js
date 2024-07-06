export function headerSetup() {
  let selecteur = document.getElementById("navigation-selecteur");
  selecteur.style.borderRadius = `${selecteur.clientHeight / 2}px`;

  let navs = document.getElementsByClassName("nav");
  for (let nav of navs) {
    nav.addEventListener("mouseenter", () => {
      let num = parseInt(nav.dataset.num);
      let offset = document.getElementById('navigation-barre').offsetLeft;
      for (let i = 1; i < num; i++) {
        offset += document.getElementById(`nav-${i}`).clientWidth;
      }

      selecteur.style.width = `${nav.clientWidth}px`;
      selecteur.style.left = `${offset}px`;
    });

    nav.addEventListener("mouseleave", () => {
      selecteur.style.width = `100%`;
      selecteur.style.left = `0`;
    });
  }

  navSetup();
}

function navSetup() {
  // Accueil
  // A propos
  // Projects
  // Skills
  // Contact
}
