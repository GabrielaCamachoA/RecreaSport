export default function login() {
  return `

<form id="login-form">

 <div class="text-center mb-4">

<img src="./public/images/RecreasportLOGO.png" alt="RecreaSport Logo" class="img-fluid" style="max-height: 100px;">

</div>

<h2 class="text-center mb-4">Login</h2>





<div class="mb-3" style="max-width: 400px; margin: auto; ">

<label for="login-username" class="form-label">Username</label>

<input type="text" class="form-control" id="login-username" placeholder="" required>

</div>



<div class="mb-4" style="max-width: 400px; margin: auto; ">

<label for="login-password" class="form-label">Password</label>

<input type="password" class="form-control" id="login-password" placeholder="" required>

</div>



<div class="d-flex justify-content-between align-items-center mb-3" style="max-width: 500px; margin: auto;">

<div class="form-check">

<input class="form-check-input" type="checkbox" id="remember-me">

<label class="form-check-label" for="remember-me">
  Remember me 
</label>

</div>

<a href="#">Forgot Password?</a>

</div>

<div class="text-center mb-3" style="max-width: 500px; margin: auto;">

<button type="submit" class="btn btn-primary w-100 mb-3" style="max-width: 500px; margin auto;" >Login</button>
</div>


<div class="d-grid mb-3" style="max-width: 500px; margin: auto;">

<button type="button" id="btnGoogleLogin" class="btn btn-outline-secondary">

<img src="https://developers.google.com/identity/images/g-logo.png" alt="Google Logo" style="width: 20px;" class="me-2">

Sign in with Google

</button>

</div>

 <div class="text-center">

      <p>Don't have an account? <a href="/register">Register</a></p>

  </div>

</form>

`;
}
