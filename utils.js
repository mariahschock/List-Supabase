export function renderHikes(hikes) {
    const div = document.createElement('div');
    div.classList.add('hiking-spots');

    const h1 = document.createElement('h1');
    h1.textContent = hikes.hike;

    const img = document.createElement('img');
    img.src = `./assets/${hikes.hike}.png`;
    
    const a = document.createElement('a');
    a.href = `./Hikes/?id=${hikes.id}`;

    div.append(h1, img);
    a.append(div);
    return a;
}

export function renderHike(hike) {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('hikes');

    h1.textContent = hike.hike;

    img.src = `../assets/${hike.hike}.png`;

    p.textContent = `${hike.hike} is located near ${hike.location} and is best known for ${hike.knownFor}`;

    div.append(h1, img, p);
    return div;
}