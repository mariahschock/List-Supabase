import { hiking } from './data.js';
import { renderHikes } from './utils.js';

const hikesListEl = document.getElementById('hiking');

for (let hikes of hiking) {
    const hikingDiv = renderHikes(hikes);
    hikesListEl.append(hikingDiv);
}
