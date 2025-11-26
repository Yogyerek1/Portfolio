import { getHeaderHTML } from './templates/header.js';
import { getContentHTML } from './templates/content.js';
import { getFooterHTML } from './templates/footer.js';
import { socialbarHTML } from './templates/socialbar.js';
import { getAdminLogModal } from './templates/adminlog.js';
import { getAdminPanel, getModalAdd } from './templates/adminpanel.js';

export let currentLanguage = 'hu'; // or 'eng'

const render = () => {
    const root = document.getElementById('root');
    root.innerHTML = loadSite() + getAdminLogModal();

    const changeLanguage = document.getElementById('changeLanguage');
    changeLanguage.addEventListener("click", () => { currentLanguage = currentLanguage === 'eng' ? 'hu' : 'eng'; render(); });

    if(window.location.pathname === '/admin-log') {
        const adminLogModal = document.getElementById('adminlog');
        const adminModal = new bootstrap.Modal(adminLogModal);
        adminModal.show();

        const password = document.getElementById('pswd');
        const submitBtn = document.getElementById('admin-log-form');
        submitBtn.addEventListener('submit', async (e) => {
            e.preventDefault();
            const pswd = password.value;
            try {
                const response = await fetch('/check-data', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ data: pswd })
                });
                const data = await response.json();
                if (data.success) {
                    adminModal.hide();
                    root.innerHTML = getAdminPanel(currentLanguage) + getModalAdd();
                    const pname = document.getElementById('pname');
                    const pstack = document.getElementById('pstack');
                    const response = await fetch('/add-data', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ pname: pname, pstack: pstack })
                    });
                    const data = await response.json();

                    if (data.succes) {
                        alert("Sikeresen hozzáadtad a projektet!");
                    }
                } else {
                    alert(data.message);
                }
            } catch (error) {
                console.error('Error', error);
            }
        });
    }
};
render();

function loadSite () {
    return `
        ${getHeaderHTML(currentLanguage)}
        ${getContentHTML(currentLanguage)}
        ${getFooterHTML(currentLanguage)}
        ${socialbarHTML}
    `;
        
}





