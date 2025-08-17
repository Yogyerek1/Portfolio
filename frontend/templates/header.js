import { currentLanguage } from "../config.js";
import { texts as textsHU } from "../languages/hu.js";
import { texts as textsENG } from "../languages/en.js";

export function getHeaderHTML(currentLanguage) {
    const texts = currentLanguage === 'eng' ? textsENG : textsHU;
    const btnTXT = currentLanguage === 'hu' ? 'ENG' : 'HU';
    return `
        <!-- Navigation -->
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark custom shadow fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src="resources/profileimg.png" alt="Avatar Logo" style="width:40px;" class="rounded-pill profile-img-nav"></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#aboutme">${texts.aboutme}</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#skills">${texts.skills}</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#references">${texts.references}</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">${texts.contact}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="ms-auto d-flex align-items-center">
                        <div class="btn btn-secondary ms-2" id="changeLanguage">${btnTXT}</div>
                    </div>
                </div>
            </nav>
        <!-- Navigation -->
    `;
};