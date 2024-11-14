// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import appFirebase from '../credenciales';
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth(appFirebase);

const ListaTareas = ({ correoUsuario }) => {
  // Estado local para las tareas
  const [tasks, setTasks] = useState([
    { id: 1, text: "Crear mapa conceptual de los...", icon: "https://img.icons8.com/ios/50/000000/combo-chart.png" },
    { id: 2, text: "Escribir notas del canal de mu...", icon: "https://img.icons8.com/ios/50/000000/headphones.png" },
    { id: 3, text: "Hacer ejercicios de redes", icon: "https://img.icons8.com/ios/50/000000/network.png" },
    { id: 4, text: "Ver curso de primeros auxilios", icon: "https://img.icons8.com/ios/50/000000/first-aid-kit.png" },
  ]);

  return (
    <div style={{ width: '90%', maxWidth: '400px', margin: '20px auto', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h3>
        Bienvenido {correoUsuario}
        <button className="btn btn-primary" onClick={() => signOut(auth)}>Log out</button>
      </h3>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <img src="https://img.icons8.com/ios-filled/50/000000/task--v1.png" alt="icono lista" style={{ width: '24px', height: '24px', marginRight: '10px' }} />
        <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>MIS TAREAS</h2>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ display: 'flex', alignItems: 'center', padding: '10px', borderBottom: '1px solid #e0e0e0' }}>
            <div style={{ width: '20px', height: '20px', marginRight: '10px', border: '1px solid #888', borderRadius: '4px' }}></div>
            <img src={task.icon} alt="icono tarea" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
            <span style={{ fontSize: '16px' }}>{task.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTareas;
