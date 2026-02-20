import "../Style/Login.css"
import PersonaCenicard from "../Img/PersonaCenicard.png"

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado");
  };

  return (
    <div className="Contenedor_Login">
      <div className="Tarjeta_login">
        <div className="Info_login">
          <h1 className="Titulo">¡Bienvenido a CeniCard!</h1>
          <div className="Imagen">
            <img src={PersonaCenicard} alt="PersonaCenicard" className="imagen" />
          </div>
          
        </div>

        <div className="Formu">
          <h2 className="Titulo_Login">Iniciar Sesion</h2>
          <form onSubmit={handleSubmit} className="Formu_Cenicard">
          <div className="Formu_Info">
            <label htmlFor="Usuario">Documento</label>
            <input id="Usuario" type="text" placeholder="" required />
          </div>
          <div className="Formu_Info">
            <label htmlFor="Password">Contraseña</label>
            <input id="Password" type="password" placeholder="" required />
          </div>

          <div className="btn">
            <button type="submit" className="btn_Ingresar">INGRESAR</button>
          </div>

          

          </form>
          <a href="/Registro" className="Enlace">¿No tienes una cuenta?</a>

        </div>
  
      </div>
    </div>
  );
}

export default Login;