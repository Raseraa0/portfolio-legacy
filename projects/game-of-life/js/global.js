
function miseEnPlace() {
  const switchLight = document.querySelector(".switch-light");

  switchLight.addEventListener("click", function () {
    const body = document.querySelector("body");
    console.log(1111111111111111);
    if (switchLight.classList.contains("active")) {
      switchLight.classList.remove("active");
      switchLight.classList.add("inactive");
      body.classList.add("disabled");
    } else {
      switchLight.classList.remove("inactive");
      switchLight.classList.add("active");
      body.classList.remove("disabled");
    }
  });
}


window.addEventListener("load", miseEnPlace, false);
