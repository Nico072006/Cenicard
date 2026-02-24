import "../Style/Perfil.css";
import { useNavigate } from "react-router-dom";
import AvatarUser from "../Img/Perfil.jpg"; // La imagen del carnet

function Perfil() {
  const navigate = useNavigate();

  return (
    <div className="Contenedor_Perfil">
      {/* Sidebar (Mantenemos consistencia) */}
      <aside className="Perfil_Principal">
        <h2 className="Texto">¡Bienvenido administrador!</h2>
        <div className="Foto_Perfil"><img src={AvatarUser} alt="Admin" /></div>
        <div className="Botones_Perfil">
          <button className="btn_Claro activo_sidebar">Ver perfil</button>
          <button className="btn_Claro" onClick={() => navigate("/")}>Cerrar sesión</button>
          <button className="btn_Claro" onClick={() => navigate("/principal")}>Inicio</button>
        </div>
        <div className="Badge_Notificaciones">Notificaciones</div>
      </aside>

      {/* PANEL CENTRAL DE PERFIL */}
      <main className="Panel_Perfil">
        
        {/* Sección Izquierda: Datos del Usuario */}
        <section className="Seccion_Datos">
          <button className="btn_atras_v" onClick={() => navigate(-1)}>⬅</button>
          <h2 className="Titulo_Centro">Perfil</h2>
          
          <div className="Campos_Info">
            <div className="Campo_Texto">Nombre: Brayan Bocanegra</div>
            <div className="Campo_Texto">Programa: A.D.S.O</div>
            <div className="Campo_Texto">Eps: Compensar</div>
            <div className="Campo_Texto">Eps: Compensar</div> {/* Como en la imagen */}
          </div>

          <button className="btn_Editar">Editar</button>
        </section>

        {/* Sección Derecha: Vista Previa del Carnet */}
        <section className="Seccion_Carnet_Preview">
          <div className="Simulador_Carnet">
            <div className="Carnet_Contenido">
              <span className="Fecha_Vence">15/12/2024</span>
              <div className="Marco_Foto">
                <img src={AvatarUser} alt="Foto Usuario" />
              </div>
              <h4 className="Nombre_Carnet">Brayan Bocanegra</h4>
              <div className="Badge_Ficha">Ficha - 3066747</div>
              <span className="Anio_Fondo">2025</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Perfil;