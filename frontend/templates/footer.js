import { currentLanguage } from "../config.js";
import { texts as textsHU } from "../languages/hu.js";
import { texts as textsENG } from "../languages/en.js";

export function getFooterHTML(currentLanguage) {
    const texts = currentLanguage == 'eng' ? textsENG : textsHU;
    return `
        <!-- Footer -->
        <footer class="bg-dark text-white text-center text-lg-start mt-2">
            <div class="container p-4">
                <div class="row justify-content-between">
                    <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 class="fw-bold gradient-text p-1">${texts.devName}</h5>
                        <p>${texts.devType} | ${texts.devQuote}</p>
                    </div>

                    <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 class="fw-bold gradient-text">${texts.quickLinks}</h5>
                        <ul class="list-unstyled mb-0">
                            <li><a href="#aboutme" class="text-white text-decoration-none">${texts.aboutme}</a></li>
                            <li><a href="#skills" class="text-white text-decoration-none">${texts.skills}</a></li>
                            <li><a href="#references" class="text-white text-decoration-none">${texts.references}</a></li>
                            <li><a href="#contact" class="text-white text-decoration-none">${texts.contact}</a></li>
                        </ul>
                    </div>
                </div>
                    
            </div>

            <!-- Alsó sáv -->
            <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
                © 2025 ${texts.devName}. All Rights Reserved.
            </div>
        </footer>
        <!-- footer -->
    `;
};  