import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Cards from './components/Cards';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import Favorites from './components/Favorites';
import { username, password } from './utils/consts';

function App() {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  const onSearch = id => {
    if (!id) return alert('Ingrese un ID de personaje por favor.');
    if (characters.find(character => character.id === id)) return alert('Personaje repetido, ingrese otro ID por favor.');

    fetch(`http://localhost:3001/rickandmorty/onsearch/${id}`)
      .then(response => response.json())
      .then(data => {
        if (data.name) {
          setCharacters(oldValue => [...oldValue, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      })
      .catch(() => {
        alert('No hay personajes con ese ID');
      });
  };

  const onClose = id => {
    setCharacters(oldState => {
      return oldState.filter(character => {
        return character.id !== id;
      });
    });
  };

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    } else {
      alert('Por favor ingrese un email y una contraseña valida.');
    }
  }

  // redirige al path "/" mientras la password o username sean incorrectos
  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  return (
    <>
      {pathname === '/' ? <Form login={login} /> : <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path={'/detail/:detailId'} element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
