import "../Style/Principal.css";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';


/*Imagenes */
import PersonaPrincipal from "../Img/PersonaPrincipal.png";
import Perfil from "../Img/Perfil.jpg"
import Carnet from "../Img/Carnet.png"
import Renta from "../Img/Renta.png"
import Prestamos from "../Img/Prestamos.png"
import Notificaciones from "../Img/Notificaciones.png"



function Principal() {
    const navigate = useNavigate();

    /*Alerta de cerrar Sesion*/
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
    <div className="Contenedor_Principal">
      <aside className="Perfil_Principal">
        <h2 className="Texto">¡Bienvenido administrador!</h2>
        <div className="Foto_Perfil">
            <img src={Perfil} alt="" />
        </div>

        <div className="Botones_Perfil">
          <button className="btn_Claro" onClick={()=>navigate("/Perfil")}>Ver perfil</button>
          <button  className="btn_Claro" onClick={handleLogout}>Cerrar sesión</button>
        </div>
        <div className="Badge_Notificaciones">
          <img className="icon" src={Notificaciones} alt="" />
          Notificaciones
        </div>
      </aside>


      <section className="Texto_Bienvenida">
        <h2>¡Disfruta de todos nuestros servicios!</h2>
        <img src={PersonaPrincipal} alt="Persona Cenicard" />
      </section>

      <section className="Servicios">
        <div className="Card_Principal Card_Grande ">
          <h3>Carnets digitales</h3>
          <img className="Icono_card" src={Carnet} alt="Carnet" />
          <button className="btn_mas" onClick={()=>navigate("/Carnets")}>+</button>
        </div>
        
        <div className="Fila_Inferior">
          <div className="Card_Small">
            <p>Renta de material</p>
            <img className="Icono_Small" src={Renta} alt="Renta" />
            <button className="btn_mas" onClick={()=> navigate("/Renta")}>+</button>
          </div>
          <div className="Card_Small">
            <p>Préstamos</p>
            <img className="Icono_Small" src={Prestamos} alt="Prestamos" />
            <button className="btn_mas" onClick={()=>navigate("/Prestamos")}>+</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Principal;