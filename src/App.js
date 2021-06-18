import React from 'react';
import './App.css';
import PersonCard from './components/Person-card';

function App() {

  const informacion = [
    {nombre:"Jane", apellido:"Doe", edad:45, colorCabello:"Negro"},
    {nombre:"Jhon", apellido:"Smith", edad:88, colorCabello:"Marrón"},
  ]

  return (
    <div className="App">
      {
        informacion.map((inf,i)=> <PersonCard key={i} {...inf} />)
      }
    </div>
  );
}


export default App;
