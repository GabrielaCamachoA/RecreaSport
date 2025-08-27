export default function login() {
  return`
     <form id="login-form">
    <div class="text-center mb-4">
        <img src="../logo.png" alt="RecreaSport Logo" class="img-fluid" style="max-height: 100px;">
    </div>
    
    <h2 class="text-center mb-4">Login</h2>

    <div class="mb-3">
      <div class="form-floating">
        <input type="text" class="form-control" id="login-username" placeholder="Username" required>
        <label for="login-username">Username</label>
      </div>
    </div>

    <div class="mb-3">
      <div class="form-floating">
        <input type="password" class="form-control" id="login-password" placeholder="Password" required>
        <label for="login-password">Password</label>
      </div>
    </div>

    <div class="d-flex justify-content-between align-items-center mb-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="remember-me">
        <label class="form-check-label" for="remember-me">
          Remember me
        </label>
      </div>
      <a href="#">Forgot Password?</a>
    </div>

    <button type="submit" class="btn btn-primary w-100 mb-3">Login</button>

    <div class="d-grid mb-3">
      <button type="button" id="btnGoogleLogin" class="btn btn-outline-secondary">
        <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google Logo" style="width: 20px;" class="me-2">
        Sign in with Google
      </button>
    </div>

    <div class="text-center">
      <p>Don't have an account? <a href="/register">Register</a></p>
    </div>
  </form>
`};
