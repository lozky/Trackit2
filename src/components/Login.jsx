import React, { useState } from 'react';
import appFirebase from '../credenciales';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(appFirebase);

const Login = () => {
  const [registrando, setRegistrando] = useState(false);
  const [error, setError] = useState('');

  const funAuth = async (e) => {
    e.preventDefault(); // Corregido el error tipográfico aquí

    const correo = e.target.email.value;
    const contraseña = e.target.pass.value;

    console.log(correo);

    // Validación simple (puedes agregar más validaciones)
    if (!correo || !contraseña) {
      setError('Por favor, ingresa ambos campos');
      return;
    }

    setRegistrando(true);
    setError('');

    try {
      // Creando usuario (si no está registrado)
      const userCredential = await createUserWithEmailAndPassword(auth, correo, contraseña);
      console.log(userCredential); // Aquí se puede manejar el usuario recién creado
    } catch (error) {
      setError(error.message); // Mostrar el error en caso de fallo
    } finally {
      setRegistrando(false);
    }
  };

  return (
    <div className="formu container col-4 d-flex justify-content-center align-items-center">
      <form onSubmit={funAuth}>
        <h4 className="text-center mb-4">Registro
        </h4>

        {error && <p className="text-danger">{error}</p>} {/* Mostrar errores */}

        <div className="form-outline mb-4">
          <input type="email" id="email" name="email" className="form-control" required />
          <label className="form-label" htmlFor="email">Email address</label>
        </div>

        <div className="form-outline mb-4">
          <input type="password" id="pass" name="pass" className="form-control" required />
          <label className="form-label" htmlFor="pass">Password</label>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block mb-4"
          disabled={registrando} // Deshabilitar el botón mientras se está registrando
        >
          {registrando ? 'Iniciando sesión...' : 'Inicia Sesion'}
        </button>
      </form>
    </div>
  );
};

export default Login;
