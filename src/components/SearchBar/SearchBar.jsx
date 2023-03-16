import { useState } from 'react';
import style from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const [character, setCharacter] = useState('');

  const handler = event => {
    setCharacter(event.target.value);
  };

  return (
    <div className={style.container}>
      <input type="search" value={character} onChange={e => handler(e)} className={style.searchBar} />
      <button onClick={() => onSearch(character)} className={style.button}>
        AGREGAR
      </button>
    </div>
  );
}

// aplicar los estilos en css modules con classname. Aplicarlos al tag se aplican de forma global.
