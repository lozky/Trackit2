// eslint-disable-next-line no-unused-vars
import React from 'react'

import appFirebase from '../credenciales';
import { getAuth,signOut } from 'firebase/auth';

const auth = getAuth(appFirebase);

const listaTareas = ({correoUsuario}) => {
  return (
    <div>
        <h3>bienvenido {correoUsuario}<button className='btn btn-primary' onClick={()=>signOut(auth)}>LOg out</button></h3>
    </div>
  )
}

export default listaTareas