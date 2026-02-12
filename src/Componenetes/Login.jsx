import "../Style/Login.css"

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado");
  };

  return (
    <div className="Contenedor">
      <div className="Titulo">
        <h1>Login Cenicard</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="formu">
          <label htmlFor="usuario">Usuario</label>
          <input id="usuario" type="text" placeholder="Nicolas" required />
        </div>

        <div className="formu">
          <label htmlFor="pass">Contraseña</label>
          <input id="pass" type="password" placeholder="********" required />
        </div>

        <div className="btnLogin">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default Login;