export default function RegisterView (){
   return  `
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
}
