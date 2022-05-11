import { getHike } from '../fetch-utils.js';
import { renderHike } from '../utils.js';

const hikes = document.getElementById('hikes');

async function loadData() {
    const params = new URLSearchParams(window.location.search);
    const hike = await getHike(params.get('id'));

    const hikeDiv = renderHike(hike);
    hikes.append(hikeDiv);
}
loadData();