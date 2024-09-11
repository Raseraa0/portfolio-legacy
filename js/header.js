export function headerSetup() {
  let selecteur = document.getElementById("navigation-selecteur");
  selecteur.style.borderRadius = `${selecteur.clientHeight / 2}px`;

  let navs = document.getElementsByClassName("nav");
  for (let nav of navs) {
    nav.addEventListener("mouseenter", () => {
      let num = parseInt(nav.dataset.num);
      let offset = document.getElementById("navigation-barre").offsetLeft;
      for (let i = 1; i < num; i++) {
        var temp = document.getElementById(`nav-${i}`);
        if (temp) {
          offset += temp.clientWidth;
        }
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
  const navs = document.getElementsByClassName("nav");

  for (let nav of navs) {
    nav.addEventListener("click", () => {
      const num = parseInt(nav.dataset.num);

      switch (num) {
        case 1: // Accueil
          zoomToHeroCentered();
          break;
        case 2: // A propos
          scrollToSection("section-myself");
          break;
        case 3: // Projects
          scrollToSection("section-projects");
          break;
        case 4: // Skills
          scrollToSection("section-skills");
          break;
        case 5: // Contact
          activeEachContact();
          break;
      }
    });
  }
}

function zoomToHeroCentered() {
  const heroCentered = document.getElementById("hero-centered");

  // Appliquer l'effet de zoom
  heroCentered.style.transition = "transform 0.2s ease-out";
  heroCentered.style.transform = "scale(1.05)";

  // Revenir à la taille initiale après un court délai
  setTimeout(() => {
    heroCentered.style.transform = "scale(1)";
  }, 200);

  // Retirer la transition après l'animation
  setTimeout(() => {
    heroCentered.style.transition = "";
  }, 300);
}

function activeEachContact() {
  var tot = 0;
  for (var i = 1; ; i++) {
    const contact = document.getElementById(`media-${i}`);

    if (!contact) {
      tot = i - 1;
      break;
    }

    setTimeout(() => {
      // Appliquer l'effet de zoom
      contact.style.transition = "transform 0.2s ease-out";
      contact.style.transform = "scale(1.35)";
      contact.classList.add("activated");

      // Revenir à la taille initiale après un court délai
      setTimeout(() => {
        contact.style.transform = "scale(1)";
      }, 200);

      // Retirer la transition après l'animation
      setTimeout(() => {
        contact.style.transition = "";
      }, 300);
    }, i * 200);
  }

  for (var i = 1; ; i++) {
    const contact = document.getElementById(`media-${i}`);

    if (!contact) {
      break;
    }

    setTimeout(() => {
      // Appliquer l'effet de zoom
      contact.style.transition = "transform 0.2s ease-out";
      contact.style.transform = "scale(1.35)";
      contact.classList.remove("activated");

      // Revenir à la taille initiale après un court délai
      setTimeout(() => {
        contact.style.transform = "scale(1)";
      }, 200);

      // Retirer la transition après l'animation
      setTimeout(() => {
        contact.style.transition = "";
      }, 300);
    }, (tot + i) * 200);
  }
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}

function scrollToFooter() {
  const footer = document.querySelector("footer");
  footer.scrollIntoView({ behavior: "smooth" });
}

export function setupBackToTopButton() {
  const backToTopButton = document.getElementById("back-to-top");
  const heroSection = document.getElementById("section-myself");

  window.addEventListener("scroll", () => {
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight / 2;

    if (window.pageYOffset > heroBottom) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  backToTopButton.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToSection("section-myself");
  });
}
