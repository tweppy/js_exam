import { planetsData } from "./modules/api.js";
import { displayPlanet } from "./modules/display.js";

const home = document.querySelector('#home');
const overlay = document.querySelector('.overlay');
let planetElem = document.querySelectorAll('.planet');
const closeBtn = document.querySelector('#overlay__close-btn');

class PlanetModel {
    constructor(planetsData) {
        Object.assign(this, planetsData)
    }
}

for (let i = 0; i < planetElem.length; i++) {
    planetElem[i].addEventListener('click', () => {
        let planet = new PlanetModel(planetsData[i]);
        let planetColor = window.getComputedStyle(planetElem[i], null).getPropertyValue('background-color'); //få färg ur klickat planet ELement
        displayPlanet(planet, planetColor);
        showOrHide();
    });
}

function showOrHide () {
    overlay.classList.toggle('overlayshow');
    home.classList.toggle('hide');
}

closeBtn.addEventListener('click', showOrHide);

