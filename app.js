import { getHikes } from './fetch-utils.js';
import { renderHikes } from './utils.js';

const hikesListEl = document.getElementById('hiking');

async function loadData() {
    const hikes = await getHikes();

    for (let hike of hikes) {
        const hikingDiv = renderHikes(hike);
        hikesListEl.append(hikingDiv);

    }
}
loadData();