// Här har jag lagt allt som tillhör att visa info om en planet. planetsInfo sparar DOM elem i variabler där info ska fyllas i. Sen används displayPlanet för att visa infon från API om en planet. Eftersom koden här är bara för att visa spec infon tyckte jag den passade att vara för sig själv.

const planetsInfo = {
    planetName: document.querySelector('.overlay__planet-name'),
    planetNameLatin: document.querySelector('.overlay__planet-name-latin'),
    planetCircumference: document.querySelector('.facts__circumference'),
    planetDistance: document.querySelector('.facts__distance'),
    planetTempDay: document.querySelector('.facts__temp-day'),
    planetTempNight: document.querySelector('.facts__temp-night'),
    planetMoons: document.querySelector('.planet-info__moons'),
    planetAboutText: document.querySelector('.planet-info__desc'), //desc
    overlayPlanet: document.querySelector('.overlay__planet')
}

function displayPlanet (planet, planetColor) {
    planetsInfo.planetName.textContent = planet.name.toUpperCase();
    planetsInfo.planetNameLatin.textContent = planet.latinName.toUpperCase();
    planetsInfo.planetAboutText.textContent = planet.desc;
    planetsInfo.planetCircumference.innerHTML = `<span class="facts__heading">OMKRETS</span> \n ${planet.circumference} KM` 
    planetsInfo.planetDistance.innerHTML = `<span class="facts__heading">KM FRÅN SOLEN</span> \n ${planet.distance} KM`
    planetsInfo.planetTempDay.innerHTML = `<span class="facts__heading">DAG TEMPERATUR</span> \n ${planet.temp.day} C`
    planetsInfo.planetTempNight.innerHTML = `<span class="facts__heading">NATT TEMPERATUR</span> \n ${planet.temp.night} C`
    planetsInfo.planetMoons.innerHTML = `<span class="facts__heading">MÅNAR:</span> \n ${planet.moons.join(' - ')}`
    planetsInfo.overlayPlanet.style.backgroundColor = planetColor;
    displayRing(planet);
    checkMoons(planet);
}

function displayRing(planet) {
    const overlayPlanetRing = document.querySelector('#overlay__planet--ring'); 
    if (planet.name === 'Saturnus') {
        overlayPlanetRing.classList.remove('hide');
    } else {
        overlayPlanetRing.classList.add('hide');
    }
}

function checkMoons(planet) {
    if (planet.moons.length === 0) {
        planetsInfo.planetMoons.innerHTML = `<span class="facts__heading">MÅNAR</span> \n ${planet.name} har inga månar`
    }
}

export { displayPlanet } 