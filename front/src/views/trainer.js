import "./styles/trainer.css"

export default function Trainer() {
  return `<main id="panel-trainer">
    <h1 class="h1">Panel del Entrenador</h1>
    <span>Gestion de entrenamientos y asistencias</span>
    <section class="cube-opt">
        <ul class="cube">
        <li >
            Estudiantes asignados
        </li>
        <li>
            Asistencias
        </li>
        
        <li>
            Ausencias
        </li>
        
        <li>
            Tardanzas
        </li>
        </ul>


        <nav> 
            <ul class="opt">
                <li>Estudiantes</li>
                <li>Marcar asistencia</li>
                <li>Historial</li>
                <li>Notificaciones</li>
            </ul>
        </nav>
    </section>  
  </main>`
  
}
