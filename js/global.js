import { headerSetup } from './header.js';
import { setDetails } from './details.js';

import { redirectionWallpaperGenerator, } from './projects.js';
import { redirectionGameOfLife } from './projects.js';
import { redirectionBoidsSimulation } from './projects.js';




function miseEnPlace() {
    headerSetup();
    setDetails();

    document.querySelector(".project1 .project-plus").addEventListener('click', redirectionWallpaperGenerator);
    document.querySelector(".project2 .project-plus").addEventListener('click', redirectionGameOfLife);
    document.querySelector(".project3 .project-plus").addEventListener('click', redirectionBoidsSimulation);
}

window.addEventListener("load", miseEnPlace, false);
