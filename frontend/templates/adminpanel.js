import { currentLanguage } from "../script.js";
import { texts as textsHU } from "../languages/hu.js";
import { texts as textsENG } from "../languages/en.js";

export function getAdminPanel (currentLanguage) {
    const texts = currentLanguage == 'eng' ? textsENG : textsHU;
    return `
        <div class="container-fluid bg-dark text-white h-100 w-100 p-5 justify-content-center align-items-center">
            <p class="fw-bolder fs-1 text-center gradient-text1">Admin panel</p>
            <hr>
            <div class="border border-primary">
            <!-- projects -->
                <div class="container">
                    <div class="row align-items-center justify-content-between">
                        <div class="col">
                            <div class="fs-1 fw-bolder text-center gradient-text1 mb-0" id="references">${texts.projects}</div>
                        </div>
                        <div class="col-auto">
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal">
                                Add
                            </button>
                        </div>
                    </div>
                </div>
                    <hr>
                    <div class="container">
                        <div class="row justify-content-center mt-5 mb-5">
                            <div class="col-12 col-md-4 mb-3">
                                <div class="card bg-dark border-primary h-100 m-3">
                                    <div class="card-header border-primary">Timer/Stopper</div>
                                    <div class="card-body">Stack: HTML, CSS + Bootstrap 5, Java Script</div>
                                    <div class="card-footer border-primary d-flex flex-column flex-md-row gap-2">
                                        <div class="btn btn-secondary">${texts.sourceCode}</div>
                                        <div class="btn btn-info m-1"><a href="yogyerekdev.nhely.hu">${texts.visit}</a></div>
                                        <div class="btn btn-danger m-1" id="btn-delete">${texts.delete}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        <!-- projects -->
        </div>
    </div>
    `;
}

export function getModalAdd () {
    return `
        <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalLabel">Add Project</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="add-project-form">
                    <div class="mb-3">
                        <label for="Project name" class="form-label">Project name:</label>
                        <input type="text" class="form-control" id="pname" name="pname" autocomplete="off">
                    </div>
                    <div class="mb-3">
                        <label for="Stack" class="form-label">Project stack:</label>
                        <input type="text" class="form-control" id="pstack" name="pstack" autocomplete="off">
                    </div>
                    <button type="submit" class="btn btn-success w-100" id="add-btn">Add</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
    `;
}