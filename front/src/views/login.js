export default function login() {
  return `
  <section class="login-form">
    <div class="container-login">
    <div  class="form-login">
      <form id="login-form">
        <h2 class="text-center mb-4">Iniciar Sesión</h2>
        <div class="mb-3" style="max-width: 400px; margin: auto; ">
          <input type="text" class="form-control" id="login-username" placeholder="Nombre" required>
        </div>
        <div class="mb-4" style="max-width: 400px; margin: auto; ">
          <input type="password" class="form-control" id="login-password" placeholder="Contraseña" required>
        </div>
        <div class="check" style="max-width: 500px; margin: auto;">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="remember-me">
            <label class="form-check-label" for="remember-me">Recúerdame</label>
          </div>
            <button type="button" id="btnGoogleLogin" class="btn google"><i class="bi bi-google"></i></button>

    </div>

      <button type="submit" class="btn w-100 mb-3 login" style="max-width: 500px; margin auto;" >Login</button>
      <p>No tienes cuenta? <a href="/register" class="link-register">Registrate</a></p>
      </form>
    </div>

    <div class="div-login">
      <div>
        <h2>Bienvenido!!</h2>
      </div>
    </div>
  </section>

`;
}
