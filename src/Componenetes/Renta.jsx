import "../Style/Renta.css";
import { useNavigate } from "react-router-dom";
import Perfil from "../Img/Perfil.jpg";

function Renta() {
  const navigate = useNavigate();

  // Datos de ejemplo para los materiales
  const materiales = [
    { id: "QJ7856PQ", estado: "Disponible", color: "verde" },
    { id: "KJR7856I", estado: "Ocupado", color: "naranja" },
    { id: "56PQRJ6", estado: "No disponible", color: "rojo" },
    { id: "ZH75LH2", estado: "Disponible", color: "verde" },
  ];

  return (
    <div className="Contenedor_Renta">
      {/* Sidebar (Igual a las anteriores) */}
      <aside className="Perfil_Principal">
        <h2 className="Texto">¡Bienvenido administrador!</h2>
        <div className="Foto_Perfil"><img src={Perfil} alt="Perfil" /></div>
        <div className="Botones_Perfil">
          <button className="btn_Claro">Ver perfil</button>
          <button className="btn_Claro" onClick={() => navigate("/")}>Cerrar sesión</button>
          <button className="btn_Claro" onClick={() => navigate("/principal")}>Inicio</button>
        </div>
        <div className="Badge_Notificaciones">Notificaciones</div>
      </aside>

      {/* Panel Central */}
      <main className="Panel_Renta">
        
        {/* Sección Izquierda: Categorías */}
        <section className="Seccion_Categorias">
          <button className="btn_atras" onClick={() => navigate(-1)}>⬅</button>
          <h2 className="Titulo_Seccion">Renta de material</h2>
          
          <div className="Contenedor_Categorias">
            <h3>Categorias</h3>
            <button className="btn_categoria activo">Trabajo</button>
            <button className="btn_categoria">Entretenimiento</button>
          </div>
        </section>

        {/* Sección Derecha: Material (Portátiles) */}
        <section className="Seccion_Material">
          <div className="Header_Material">
            <h3>Material</h3>
            <div className="Acciones_Header">
              <select className="select_tipo">
                <option>Portátiles </option>
              </select>
              <button className="btn_Agregar_Material">Agregar +</button>
            </div>
          </div>

          <div className="Grid_Material">
            {materiales.map((item, index) => (
              <div className="Card_Material" key={index}>
                <div className={`Badge_Estado ${item.color}`}>{item.estado}</div>
                <div className="Icono_Laptop">💻</div>
                <span className="ID_Material">{item.id}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Renta;