import { useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  const [error, setError] = useState(false);
  const validarInput = (e) => {
    e.preventDefault();
    if (!correo.trim() || !contraseña.trim()) {
      setError(true);
      return;
    }
    setError(false);
  };
  const handleEnviar = () => {
    // console.log(correo, contraseña, confirmarContraseña);
    if (correo.trim() === "" || contraseña.trim() === "") {
      alert("Por favor, llena todos los campos");
    } else if (contraseña.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
    } else if (contraseña === "123456") {
      alert("Login exitoso");
    } else {
      alert("Login incorrecto");
    }
  };

  return (
    <>
      <form className="login-page" onSubmit={validarInput}>
        {error ? <p></p> : null}
        <div className="login-page-">
          <h1>Login de usuario</h1>
          <div className="login-page__input">
            <h4>Correo electrónico</h4>
            <input
              type="text"
              placeholder="Escribe tu correo electrónico"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>
          <div className="login-page__input">
            <h4>Contraseña</h4>
            <input
              type="text"
              placeholder="Escribe tu contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
          </div>

          <button onClick={handleEnviar}>Enviar</button>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
