import { headerSetup } from './header.js';
import { setDetails } from './details.js';






function miseEnPlace() {
    headerSetup();
    setDetails();
}

window.addEventListener("load", miseEnPlace, false);
