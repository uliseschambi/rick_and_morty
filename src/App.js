import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Cards from './components/Cards';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';

function App() {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const username = 'ulises@gmail.com';
  const password = 'password';

  const onSearch = id => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(data => {
        if (data.error) alert('No hay personajes con ese ID');
        else setCharacters(oldValue => [...oldValue, data]);
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
      alert('Por favor ingrese un email o contraseña valida.');
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
        <Route path={'/detail/:detailId'} element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
