import React, { useState } from 'react';
import appFirebase from '../credenciales';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


const auth = getAuth(appFirebase);

const SingUp = () => {
  const [registrando, setRegistrando] = useState(false);
  const [error, setError] = useState('');

  const funAuth = async (e) => {
    e.preventDefault();

    const correo = e.target.email.value;
    const contraseña = e.target.pass.value;

    // Validación simple
    if (!correo || !contraseña) {
      setError('Por favor, ingresa ambos campos');
      return;
    }

    setRegistrando(true);
    setError('');

    try {
      // Intentar iniciar sesión
      const userCredential = await signInWithEmailAndPassword(auth, correo, contraseña);
      console.log("Usuario logueado:", userCredential.user);
    } catch (error) {
      // Si falla el login, intenta registrar al usuario
      if (error.code === 'auth/user-not-found') {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, correo, contraseña);
          console.log("Usuario registrado:", userCredential.user);
        } catch (registrationError) {
          setError(registrationError.message);
        }
      } else {
        setError(error.message);
      }
    } finally {
      setRegistrando(false);
    }
  };

  return (
    <div className="formu container col-4 d-flex justify-content-center align-items-center">
      <form onSubmit={funAuth}>
        <h4 className="text-center mb-4">Iniciar ssesion</h4>

        {error && <p className="text-danger">{error}</p>}

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
          disabled={registrando}
        >
          {registrando ? 'Procesando...' : 'Inicia Sesión o Regístrate'}
        </button>

        <div className="text-center">
        <p>Not a member? </p>
        </div>
      </form>
    </div>
  );
};

export default SingUp;
