document.addEventListener("DOMContentLoaded", function () {

    loadWallpapers();

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
        setTimeout(() => {
          container.style.transition = "left 0.5s ease-in-out";
        }, 50);
      }
      container.style.left = position + "px";
      requestAnimationFrame(slide);
    }

    slide();

    // Responsive behavior
    function updateImageSize() {
      const sliderHeight =
        document.querySelector(".image-slider").offsetHeight;
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
    const container = document.querySelector('.image-container');
    const numberOfImages = 18; // Le nombre total d'images que tu souhaites charger

    for (let i = 1; i <= numberOfImages; i++) {
      const wrapper = document.createElement('div');
      wrapper.classList.add('image-wrapper');

      const img = document.createElement('img');
      img.src = `img/Wallpaper${i}.png`; // Change le chemin en fonction du nom des images
      img.alt = "";
      img.loading = "lazy";

      wrapper.appendChild(img);
      container.appendChild(wrapper);
    }
  }