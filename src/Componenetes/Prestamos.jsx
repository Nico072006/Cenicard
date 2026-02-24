import "../Style/Prestamos.css";
import { useNavigate } from "react-router-dom";
import Perfil from "../Img/Perfil.jpg";

function Prestamos() {
  const navigate = useNavigate();

  const pendientes = [
    "Brayan Bocanegra - Portátil",
    "Daniel Moreno - Libro",
    "Dairon Mancera - Portátil",
    "Nicolás Muñoz - Jenga"
  ];

  return (
    <div className="Contenedor_Prestamos">
      {/* Sidebar Lateral */}
      <aside className="Perfil_Principal">
        <h2 className="Texto">¡Bienvenido administrador!</h2>
        <div className="Botones_Perfil_Grid">
           <button className="btn_Claro_Small" onClick={() => navigate("/principal")}>Inicio</button>
           <button className="btn_Claro_Small">Ver perfil</button>
           <button className="btn_Claro_Small" onClick={() => navigate("/")}>Cerrar sesión</button>
           <div className="Badge_Notificaciones_Small">Notificaciones</div>
        </div>
      </aside>

      {/* Panel Central */}
      <main className="Panel_Prestamos">
        
        {/* Sección Izquierda: Pendientes */}
        <section className="Seccion_Pendientes">
          <button className="btn_atras_verde" onClick={() => navigate(-1)}>⬅</button>
          <h2 className="Titulo_Principal">Préstamos</h2>
          
          <div className="Caja_Pendientes">
            <h3>Pendientes</h3>
            {pendientes.map((item, index) => (
              <div className="Item_Pendiente" key={index}>{item}</div>
            ))}
          </div>
        </section>

        {/* Sección Derecha: Historial */}
        <section className="Seccion_Historial">
          <h2 className="Titulo_Historial">Historial</h2>
          
          <div className="Subseccion_Historial">
            <h4>Entregados:</h4>
            <div className="Item_Historial entregado">Brayan Bocanegra - Portátil</div>
            <div className="Item_Historial entregado">Mauricio López - Libro</div>
            <div className="Item_Historial entregado">Camilo Beltrán - Uno</div>
          </div>

          <div className="Subseccion_Historial">
            <h4>No entregados:</h4>
            <div className="Item_Historial no_entregado">Andrés Martinez - Portátil</div>
            <div className="Item_Historial no_entregado">Brayan Bocanegra - Libro</div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Prestamos;