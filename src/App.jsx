import { useState } from 'react';
import UserItem from './componentes/UserItem';
import getUsers from './apis/getUsers';
import { useEffect } from 'react';

import './app.css'

export default function App() {
  const [users, setUsers] = useState([]);
  const [cont, setCont] = useState(true);
  const [user, setUser] = useState({});

  const results = () => {
    getUsers().then(newUsers => {
      console.log("Debir al final")
      let lista = [];

      lista = newUsers.results.map(user => {
        return {
          name: user.name.first,
          apellido: user.name.last
        }
      });

      lista = lista.sort((a, b) =>{
        return a.apellido.toLocaleUpperCase() > b.apellido.toLocaleUpperCase() ? -1 : 1;
      });

      setUsers(lista);
    })
  };

  useEffect(() => {
    console.log("Debo ir primero")
    results();
  }, [cont]);

  return (
    <div className='contenedor-lista-users'>
      <h1 className='titulo-user'>Nombres en orden alfabetico inverso</h1>
      <div className='lista-users'>
        <ul>
          {users.map(user => {
            return <UserItem key={user.name} user={user} onClick={() => setUser(user)} />
          })}
        </ul>
      </div>
      <div>
          <h2>Pulsa el boton para nuevos usuarios</h2>
          <button onClick={() => setCont(!cont)}>Haz click</button>
      </div>
      <div>
        <h2>{user.name} {user.apellido}</h2>
      </div>
    </div>
  )
}
