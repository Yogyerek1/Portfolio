
export const adminLogHTML = `
    <div class="container align-items-center justify-content-center w-50 h-50 bg-dark p-5 rounded border border-primary">
        <form method="post">
            <label for="pwd" class="form-label text-white fw-bold fs-1 d-block text-center">Admin panel</label>            <div class="mb-3">
                <label for="pwd" class="form-label">Password:</label>
                <input type="password" class="form-control" id="pwd" placeholder="Enter password:" name="pswd" autocomplete="off">
            </div>
            <button type="submit" class="btn btn-primary w-100">Login</button>
        </form>
    </div>
`;