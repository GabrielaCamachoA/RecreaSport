export default function Home() {
  return `
  <section class="section-bg">
  <div class="div-bg">
    <img src="../public/images/champion.png" alt="champion" class="img-fluid">
    <p>Programa Oficial 2025</p>
  </div>
    <h2>Programa Deporte </h2>
    <span>Recreativo</span>
    <p >Barranquilla 2025</p>
    <p class="p-bg">Plataforma integral para la gestión de inscripciones y seguimiento del programa deportivo recreativo de la Alcaldía de Barranquilla.</p>
     <div class="btn">
      <a href="/login" data-link id="btnLogin"> 
        <img src="../public/images/login.png" alt="login" class="img-fluid">
        lniciar Sesion </a>
      <a href="/register" data-link id="btnRegister"> 
      <img src="../public/images/user-register.png" alt="register" class="img-fluid">
      lnscríbete Ahora 
      </a>
    </div>
  </section>
  <section class="section-deports">
    <h2>Disciplinas Deportivas</h2>
    <p class="p-deports">Descubre todas las modalidades deportivas disponibles en el programa y únete a la que más te apasione</p>
     <div class="cards">
      <div class="tarjet">
       <img src="../public/images/soccer.png" alt="logo-RecreaSport" class="img-fluid">
       <span>Fútbol</span>
       <p>200 inscritos</p>
      </div>
      <div class="tarjet">
       <img src="../public/images/basketball.png" alt="logo-RecreaSport" class="img-fluid">
       <span>Baloncesto</span>
       <p>200 inscritos</p>
      </div>
      <div class="tarjet">
       <img src="../public/images/volleyball.png" alt="logo-RecreaSport" class="img-fluid">
       <span>Volleyball</span>
       <p>200 inscritos</p>
      </div>
      <div class="tarjet">
       <img src="../public/images/swim.png" alt="logo-RecreaSport" class="img-fluid">
       <span>Natación</span>
       <p>200 inscritos</p>
      </div>
      <div class="tarjet">
       <img src="../public/images/person.png" alt="logo-RecreaSport" class="img-fluid">
       <span>Atletismo</span>
       <p>200 inscritos</p>
      </div>
      <div class="tarjet">
       <img src="../public/images/biking.png" alt="logo-RecreaSport" class="img-fluid">
       <span>Ciclismo</span>
       <p>200 inscritos</p>
      </div>
      <div class="tarjet">
       <img src="../public/images/tenis.png" alt="logo-RecreaSport" class="img-fluid">
       <span>Tenis</span>
       <p>200 inscritos</p>
      </div>
      <div class="tarjet">
       <img src="../public/images/boxeo.png" alt="logo-RecreaSport" class="img-fluid">
       <span>Boxeo</span>
       <p>200 inscritos</p>
      </div>
    </div>
  </section>
  <section class="section-locality">
    <h2>Localidades de Barranquilla</h2>
    <p class="p-locality">El programa está presente en todas las localidades de la ciudad, llevando el deporte a cada rincón de Barranquilla</p>
    <div class="cards-locality">
      <div class="tarjet-locality">
        <div>
           <img src="../public/images/location.png" alt="location" class="img-fluid">
        </div>
        <div class="info-locality">
          <span>Norte Centro Histórico</span>
          <p>3 zonas deportivas</p>
          <p>450 participantes</p>
        </div>
       </div>
      <div class="tarjet-locality">
        <div>
          <img src="../public/images/location.png" alt="location" class="img-fluid">
        </div>
        <div class="info-locality">
          <span>Riomar</span>
          <p>4 zonas deportivas</p>
          <p>380 participantes</p>
        </div>
      </div>
      <div class="tarjet-locality">
        <div>
           <img src="../public/images/location.png" alt="location" class="img-fluid">
        </div>
        <div class="info-locality">
          <span>Metropolitana</span>
          <p>4 zonas deportivas</p>
          <p>520 participantes</p>
        </div>
      </div>
      <div class="tarjet-locality">
        <div>
           <img src="../public/images/location.png" alt="location" class="img-fluid">
        </div>
        <div class="info-locality">
          <span>Suroccidente</span>
          <p>3 zonas deportivas</p>
          <p>410 participantes</p>
        </div>
      </div>
      <div class="tarjet-locality">
        <div>
          <img src="../public/images/location.png" alt="location" class="img-fluid">
        </div>
        <div class="info-locality">
          <span>Suroriente</span>
          <p>2 zonas deportivas</p>
          <p>290 participantes</p>
        </div>
      </div>
      </div>
    </div>
  </section>
  <section class="program">
    <h2>Números que demuestran el alcance y éxito de nuestro programa deportivo en toda la ciudad</h2>
    <div class="cards-program">
      <div>
      <img src="../public/images/user.png" alt="user" class="img-fluid">
        <h2>3,200+</h2>
        <p>Ciudadanos Inscritos</p>
      </div>
      <div>
      <img src="../public/images/champion.png" alt="champion" class="img-fluid">
        <h2>8</h2>
        <p>Disciplinas Deportivas</p>
      </div>
      <div>
      <img src="../public/images/trainer.png" alt="trainer" class="img-fluid">
        <h2>45</h2>
        <p>Entrenadores</p>
      </div>
      <div>
      <img src="../public/images/locaton2.png" alt="location" class="img-fluid">
        <h2>5</h2>
        <p>Localidades Cubiertas</p>
      </div>
    </div>
  </section>
  <section class="section-info">
    <h2>Acerca del Programa</h2>
    <p class="p-program">Conoce más sobre el Programa Deporte Recreativo 2025 y nuestra misión de transformar Barranquilla</p>
    <div class="cards-info">
      <div class="tarjet-vision">
        <div>
           <img src="../public/images/cham2.png" alt="champion" class="img-fluid">
            <span>Misión</span>
        </div>
        <div class="info">
          <p>Fomentar la actividad física y el deporte recreativo para una Barranquilla más saludable e integral.</p>
        </div>
       </div>
      <div class="tarjet-mision">
        <div>
          <img src="../public/images/vision.png" alt="vision" class="img-fluid">
          <span>Visión</span>
          </div>
        <div class="info">
          <p>Liderar en el Caribe el deporte recreativo, promoviendo bienestar y calidad de vida para los barranquilleros.</p>
        </div>
      </div>
      
    </div>
  </section>
  `;
}
