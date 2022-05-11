export function renderHikes(hikes) {
    const div = document.createElement('div');
    div.classList.add('hiking-spots');

    const h1 = document.createElement('h1');
    h1.textContent = hikes.hike;

    const img = document.createElement('img');
    img.src = `./assets/${hikes.hike}.png`;

    const p = document.createElement('p');
    p.textContent = `${hikes.hike} is located near ${hikes.location} and is best known for ${hikes.knownFor}`;

    div.append(h1, img, p);
    return div;
}