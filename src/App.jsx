import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import Card from './components/Card';
import axios from 'axios';
// import Card from './components/Card.jsx';
//import SearchBar from "./components/SearchBar.jsx"
//import characters from './data.js';
// import SearchBar from './components/SearchBar.jsx';


function App() {
   const [characters, setCharacters] = useState([]);
   // const onSearch = () => {
      const  onSearch=(id)=> {
         axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
      }
      // setCharacters((prevCharacters) => [...prevCharacters, example]);
      const onClose = (id) => {
         setCharacters(
            characters.filter((char) => { return char.id !== Number(id);
         }));

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Cards characters={characters}  onClose={onClose}/>
         
         
      </div>
   );
}
}
export default App;
