// eslint-disable-next-line no-unused-vars
import { useState } from 'react'

//importando los odulos de firebase 
import appFirebase from './credenciales'
// eslint-disable-next-line no-unused-vars
import {getAuth, onAuthStateChanged} from 'firebase/auth'
// eslint-disable-next-line no-unused-vars
const auth = getAuth(appFirebase)


//importar componentes
import Login from './components/Login'
import SingUp from './components/SingUp'
import ListaTareas from './components/ListaTareas'

import './App.css'

function App() {

  const [usuario, setUsuario] = useState()

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) 
    {
      setUsuario(usuarioFirebase)
    }
    else 
    {
      setUsuario(null)
    }
  })
   

  return (
    <div>
      {usuario ? <ListaTareas correoUsuario = {usuario.email} /> : <SingUp/>}
    </div>
  )
}

export default App
