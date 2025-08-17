import { currentLanguage } from "../config.js";
import { texts as textsHU } from "../languages/hu.js";
import { texts as textsENG } from "../languages/en.js";

export function getContentHTML(currentLanguage) {
    const texts = currentLanguage == 'eng' ? textsENG : textsHU;
    return `
        <!-- About me -->
            <!--<div class="container bg-dark text-white p-3 mx-auto vh-auto mt-5 rounded content-shadow">-->
                <div class="container text-center" id="aboutme">
                    <p><img src="resources/profileimg.png" alt="profileimg" class="rounded-circle profile-img"></p>
                    <p><div class="text-white text-center fw-bolder fs-2 gradient-text">${texts.devName}</div></p>
                    <p><div class="text-white text-center fw-bolder fs-3">${texts.devType}</div></p>
                    <p><div class="text-muted text-center fw-normal fs-5">${texts.devQuote}</div></p>
                    <p>
                        <div class="container text-center">
                            <p></p>
                        </div>
                    </p>
                </div>
            <!--</div>-->
        <!-- About me -->
        <!-- content -->
            <div class="container-fluid bg-dark text-white p-3 mt-5 rounded content-shadow content">
                <!-- skills -->
                <div class="mb-5 mt-3 text-center">
                    <img src="resources/lampicon.png" alt="lampicon" width="60px" height="auto" class="me-2">
                    <span class="text-white fw-bold m-0" id="skills">${texts.skills}</span>
                </div>
                <div class="row justify-content-center">

                    <div class="col-12 col-md-4 mb-3 m-2">
                        <div class="card h-100" style="background-color: #1e1e1e; border-color: #00bcd4;">
                            <div class="card-header" style="border-color: #00bcd4;">Frontend</div>
                            <div class="card-body">
                                <ul>
                                    <li>HTML, CSS</li>
                                    <li>Bootstrap 5</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-4 mb-3 m-2">
                        <div class="card h-100" style="background-color: #1e1e1e; border-color: #00bcd4;">
                            <div class="card-header" style="border-color: #00bcd4;">Backend</div>
                            <div class="card-body">
                                <ul>
                                    <li>NodeJS + Express</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-4 mb-3 m-2">
                        <div class="card h-100" style="background-color: #1e1e1e; border-color: #00bcd4;">
                            <div class="card-header" style="border-color: #00bcd4;">${texts.programmingLanguages}</div>
                            <div class="card-body">
                                <ul>
                                    <li>Java Script</li>
                                    <li>C#</li>
                                    <li>C</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-4 mb-3 m-2">
                        <div class="card h-100" style="background-color: #1e1e1e; border-color: #00bcd4;">
                            <div class="card-header" style="border-color: #00bcd4;">${texts.other}</div>
                            <div class="card-body">
                                <ul>
                                    <li>MySQL</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- skills -->
                <!-- projects -->
                    <hr>
                    <div class="container">
                        <div class="row justify-content-center align-items-center">
                            <div class="col">
                                <p class="fs-1 fw-bolder text-center gradient-text1" id="references">${texts.projects}</p>
                            </div>
                            <!--<div class="col">
                                <div class="btn btn-primary m-3" style="float: right;">Add</div>
                            </div>-->
                        </div>
                    </div>
                    
                    <div class="container">
                        <div class="row justify-content-center mt-5 mb-5">
                            <div class="col-12 col-md-4 mb-3">
                                <div class="card bg-dark border-primary h-100 m-3">
                                    <div class="card-header border-primary">Timer/Stopper</div>
                                        <div class="card-body">Stack: HTML, CSS + Bootstrap 5, Java Script</div>
                                        <div class="card-footer border-primary"><div class="btn btn-secondary">${texts.sourceCode}</div><div class="btn btn-info m-1"><a href="yogyerekdev.nhely.hu">${texts.visit}</a></div></div>
                                    </div>
                            </div>
                            <div class="col-12 col-md-4 mb-3">
                                <div class="card bg-dark border-primary h-100 m-3">
                                    <div class="card-header border-primary">Timer/Stopper</div>
                                        <div class="card-body">Stack: HTML, CSS + Bootstrap 5, Java Script</div>
                                        <div class="card-footer border-primary"><div class="btn btn-secondary">${texts.sourceCode}</div><div class="btn btn-info m-1"><a href="yogyerekdev.nhely.hu">${texts.visit}</a></div></div>
                                    </div>
                            </div>
                            <div class="col-12 col-md-4 mb-3">
                                <div class="card bg-dark border-primary h-100 m-3">
                                    <div class="card-header border-primary">Timer/Stopper</div>
                                        <div class="card-body">Stack: HTML, CSS + Bootstrap 5, Java Script</div>
                                        <div class="card-footer border-primary"><div class="btn btn-secondary">${texts.sourceCode}</div><div class="btn btn-info m-1"><a href="yogyerekdev.nhely.hu">${texts.visit}</a></div></div>
                                    </div>
                            </div>
                        </div>
                    </div>
                <!-- projects -->
                <!-- contact -->
                    <hr>
                    <div class="fs-1 fw-bolder text-center mb-5 gradient-text1" id="contact">${texts.workWithMe}</div>
                    <div class="container">
                        <form class="border border-primary p-4 rounded mx-auto mb-5 contact-form" style="max-width: 500px; background-color: #1e1e1e;">
                            <div class="mb-3 mt-3">
                                <label for="name" class="form-label">${texts.yourName}</label>
                                <input type="text" class="form-control" id="name" placeholder="${texts.name}" name="name">
                            </div>
                            <div class="mb-3">
                                <label for="name" class="form-label">E-mail:</label>
                                <input type="email" class="form-control" id="email" placeholder="e-mail" name="email">
                            </div>
                            <submit type="submit" class="btn btn-info mt-3 w-100 submit-btn">${texts.submit}</submit>
                        </form>
                    </div>
                <!-- contact -->
            </div>
        <!-- content -->
    `;
}; 