import { headerHTML } from './templates/header.js';
import { contentHTML } from './templates/content.js';
import { footerHTML } from './templates/footer.js';
import { socialbarHTML } from './templates/socialbar.js';

const root = document.getElementById('root');

root.innerHTML = `
    ${headerHTML}
    ${contentHTML}
    ${footerHTML}
    ${socialbarHTML}
`;


