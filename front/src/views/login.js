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
      <button type="button" onclick="loginWithGoogle()" class="btn btn-outline-secondary">
        <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google Logo" style="width: 20px;" class="me-2">
        Sign in with Google
      </button>
    </div>

    <div class="text-center">
      <p>Don't have an account? <a href="#" onclick="navigate('register')">Register</a></p>
    </div>
  </form>
`};

const RegisterView = () => `
  <form id="register-form">
    <h2 class="text-center mb-4">Register</h2>

    <div class="mb-3">
      <div class="form-floating">
        <input type="text" class="form-control" id="reg-fullname" placeholder="Full Name" required>
        <label for="reg-fullname">Full Name</label>
      </div>
    </div>

    <div class="mb-3">
      <div class="form-floating">
        <input type="email" class="form-control" id="reg-email" placeholder="Email" required>
        <label for="reg-email">Email</label>
      </div>
    </div>

    <div class="mb-3">
      <div class="form-floating">
        <input type="password" class="form-control" id="reg-password" placeholder="Password" required>
        <label for="reg-password">Password</label>
      </div>
    </div>

    <div class="mb-3">
      <div class="form-floating">
        <input type="password" class="form-control" id="confirm-password" placeholder="Confirm Password" required>
        <label for="confirm-password">Confirm Password</label>
      </div>
    </div>

    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="terms-agree" required>
      <label class="form-check-label" for="terms-agree">I agree to the terms</label>
    </div>

    <button type="submit" class="btn btn-primary w-100 mb-3">Register</button>

    <div class="text-center">
      <p>Already have an account? <a href="#" onclick="navigate('login')">Login</a></p>
    </div>
  </form>
`;

