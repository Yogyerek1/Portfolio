export function getAdminLogModal () {
    return `
        <div class="modal fade bg-dark" id="adminlog" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalLabel">Admin Login</h5>
                    <!--<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
                </div>
                <div class="modal-body">
                    <form id="admin-log-form">
                    <div class="mb-3">
                        <label for="Password" class="form-label">Password:</label>
                        <input type="password" class="form-control" id="pswd" name="pswd" autocomplete="off">
                    </div>
                    <button type="submit" class="btn btn-success w-100" id="admin-log-btn">Login</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
    `;
}