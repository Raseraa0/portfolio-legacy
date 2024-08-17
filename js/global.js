import { headerSetup } from "./header.js";
import { setDetails } from "./details.js";
import { setupBackToTopButton } from "./header.js";

function miseEnPlace() {
  headerSetup();
  setDetails();
  setupBackToTopButton();
}





window.addEventListener("load", miseEnPlace, false);
