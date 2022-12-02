// Att dela upp API kod för sig själv ser renare ut och det är lättare att se vad koden gör med mindre rader och vad som just exporteras - min allPlanets variabel - istället för att exportera båda funktionerna i sig

const BASE_URL = 'https://my-json-server.typicode.com/zocom-christoffer-wallenberg/solaris-api';
let planetsData;
getPlanets();

async function getKey() {
    const response = await fetch(`${BASE_URL}/keys`);
    const data = await response.json();
    return data.key;
}

async function getPlanets() {
    const key = await getKey();
    const response = await fetch(`${BASE_URL}/bodies`, {
        headers: {
            'x-zocom': key
        }
    });
    const data = await response.json();
    planetsData = data;
}

export { planetsData }