import { useState } from 'react';
import UserItem from './componentes/UserItem';
import getUsers from './apis/getUsers';
import { useEffect } from 'react';

import './app.css'
import LoginRegister from './componentes/LoginRegister';

export default function App() {
  const [show, setShow] = useState('login');

  const showScreen = show === 'login' ? <LoginRegister /> : <ListNames />;

  function handleRadio(e) {
    setShow(e);
  }

  return (
    <>
      <label>Seleccione algo:
        <input type="radio" name='show' onChange={() => handleRadio('login')} />Login
        <input type="radio" name='show' onChange={() => handleRadio('names')} />Names
      </label>
      {showScreen}
    </>
  )
}

function ListNames() {
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

      lista = lista.sort((a, b) => {
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
            return <UserItem key={user.name} user={user} setName={setUser} />
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