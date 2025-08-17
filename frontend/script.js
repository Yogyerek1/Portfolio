import { getHeaderHTML } from './templates/header.js';
import { getContentHTML } from './templates/content.js';
import { getFooterHTML } from './templates/footer.js';
import { socialbarHTML } from './templates/socialbar.js';

export let currentLanguage = 'hu';

const root = document.getElementById('root');

const render = () => {
    root.innerHTML = `
        ${getHeaderHTML(currentLanguage)}
        ${getContentHTML(currentLanguage)}
        ${getFooterHTML(currentLanguage)}
        ${socialbarHTML}
    `;
    const changeLanguage = document.getElementById('changeLanguage');
    changeLanguage.addEventListener("click", () => { currentLanguage = currentLanguage === 'eng' ? 'hu' : 'eng'; render();});
};
render();




