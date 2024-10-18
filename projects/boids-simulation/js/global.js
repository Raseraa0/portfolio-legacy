import { draw, setup } from './game/TestEspaceBoids2D.js';
import { listener } from './interaction.js';

window.setup = setup;
window.draw = draw;


window.addEventListener("load", listener, false);
