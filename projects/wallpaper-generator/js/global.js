document.addEventListener("DOMContentLoaded", function () {
  loadWallpapers();
});

function loadWallpapers() {
  const container = document.querySelector(".image-container");
  const numberOfImages = 18; // Le nombre total d'images que tu souhaites charger
  const time = 150;
  const imgWidth = 800; // have to match !!

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

  let index = 1;
  // Charger les images dans l'ordre aléatoire
  imageIndices.forEach((i) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("image-wrapper");

    const img = document.createElement("img");
    img.src = `img/Wallpaper${i}.png`; // Change le chemin en fonction du nom des images
    img.alt = "";
    img.loading = "lazy";
    img.style.animationDelay = `${
      (time / numberOfImages) * (numberOfImages - index++) * -1
    }s`;
    img.style.left = `max(calc(${imgWidth}px * ${numberOfImages}), 100%)`;
    img.style.animationDuration = `${time}s`;

    wrapper.appendChild(img);
    container.appendChild(wrapper);
  });
}
