import "../Style/Carnets.css";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';


/*Imagenes */
import Perfil from "../Img/Perfil.jpg";

function Carnets() {
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: '¿Cerrar sesión?',
      text: "Tendrás que ingresar tus datos de nuevo.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#05924e', 
      cancelButtonColor: '#d33',
      confirmButtonText: 'Salir',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });
  };

  return (
    <div className="Contenedor_carnet">
      
      <aside className="Perfil_Principal">
        <h2 className="Texto">¡Bienvenido administrador!</h2>
        <div className="Foto_Perfil">
          <img src={Perfil} alt="Perfil" />
        </div>
        <div className="Botones_Perfil">
          <button className="btn_Claro">Ver perfil</button>
          <button className="btn_Claro"onClick={handleLogout}>Cerrar sesión</button>
          <button className="btn_Claro" onClick={() => navigate("/principal")}>Inicio</button>
        </div>
        <div className="Badge_Notificaciones">Notificaciones</div>
      </aside>


      <main className="Panel_Carnets">
        

        <section className="Seccion_Solicitudes">
          <button className="btn_atras" onClick={() => navigate(-1)}>⬅</button>
          <h2 className="Titulo_Seccion">Carnets digitales</h2>
          
          <div className="Lista_Solicitudes">
            <h3>Solicitudes</h3>
            

            {[ "Nicolás Muñoz", "Dairon Mancera", "Daniel Moreno", "Brayan Bocanegra" ].map((nombre, index) => (
              <div className="Item_Solicitud" key={index}>
                <span>{nombre}</span>
                <div className="Acciones_Solicitud">
                  <button className="btn_accion btn_aceptar">✓</button>
                  <button className="btn_accion btn_eliminar">✕</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="Seccion_Usuarios">
          <div className="Header_Usuarios">
            <h3>Usuarios</h3>
            <div className="Buscador_Container">
              <input type="text" placeholder="Buscar..." />
              <button className="btn_Agregar">Agregar +</button>
            </div>
          </div>

          <div className="Grid_Usuarios">
            
            <div className="Card_User">
              <div className="User_Avatar">
                <img src={Perfil} alt="Usuario" />
              </div>
              <h4>Brayan Bocanegra</h4>
              <span className="Tag Aprendiz">Aprendiz</span>
            </div>
            <div className="Card_User">
              <div className="User_Avatar">
                <img src={Perfil} alt="Usuario" />
              </div>
              <h4>Nicolás Muñoz</h4>
              <span className="Tag Aprendiz">Aprendiz</span>
            </div>
            
            
          </div>
        </section>
      </main>
    </div>
  );
}

export default Carnets;