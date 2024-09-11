document.addEventListener("DOMContentLoaded", function () {
  loadWallpapers();

  // Partie qui pourrait peut etre etre faite en css ?????????? cf defilement horizontal infini sur youtube
  ///////////////////////////////////////////////////////////////////////////
  const container = document.querySelector(".image-container");
  const wrappers = container.querySelectorAll(".image-wrapper");
  const totalWidth = Array.from(wrappers).reduce(
    (sum, wrapper) => sum + wrapper.offsetWidth + 20,
    0
  );
  let position = 0;

  // Clone images for infinite loop
  wrappers.forEach((wrapper) => {
    const clone = wrapper.cloneNode(true);
    container.appendChild(clone);
  });

  container.style.width = totalWidth * 2 + "px";

  function slide() {
    position -= 1;
    if (position <= -totalWidth) {
      position = 0;
      container.style.transition = "none";
      container.style.left = "0px";
      console.log("ICIIIIIIIIIIIIIIIIIIIIIIIIII");
      setTimeout(() => {
        container.style.transition = "left 0.5s ease-in-out";
      }, 50);
    }
    container.style.left = position + "px";
    requestAnimationFrame(slide);
  }

  slide();
  ///////////////////////////////////////////////////////////////////////////

  // Responsive behavior
  function updateImageSize() {
    const sliderHeight = document.querySelector(".image-slider").offsetHeight;
    const images = document.querySelectorAll(".image-wrapper img");
    images.forEach((img) => {
      img.style.height = sliderHeight + "px";
      img.style.width = "auto";
    });
  }

  window.addEventListener("resize", updateImageSize);
  updateImageSize();
});



function loadWallpapers() {
  const container = document.querySelector(".image-container");
  const numberOfImages = 3; // Le nombre total d'images que tu souhaites charger

  // Créer un tableau avec les numéros d'images de 1 à 18
  const imageIndices = Array.from({ length: numberOfImages }, (_, i) => i + 1);

  // Mélanger les indices de manière aléatoire
  for (let i = imageIndices.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [imageIndices[i], imageIndices[randomIndex]] = [
      imageIndices[randomIndex],
      imageIndices[i],
    ];
  }

  // Charger les images dans l'ordre aléatoire
  imageIndices.forEach((i) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("image-wrapper");

    const img = document.createElement("img");
    img.src = `img/Wallpaper${i}.png`; // Change le chemin en fonction du nom des images
    img.alt = "";
    img.loading = "lazy";

    wrapper.appendChild(img);
    container.appendChild(wrapper);
  });
}
