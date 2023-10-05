import InputTags from './components/InputTags';
import './App.css';
import { useState } from 'react';
import Card from './components/Card';

function App() {
  const [name, setName] = useState('');
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [powerLevel, setPowerLevel] = useState(0);

  const [superheroes, setSuperheroes] = useState([]);

  const addSuperhero = () => {
    if (name && height && weight && powerLevel) {
      const superhero = { name, height, weight, powerLevel };
      setSuperheroes([...superheroes, superhero]);
      // Clear input fields
      setName('');
      setHeight(0);
      setWeight(0);
      setPowerLevel(0);
    }
  };
  const findMostPowerfulSuperhero = () => {
    if (superheroes.length > 0) {
      const mostPowerful = superheroes.reduce((prev, current) =>
        prev.powerLevel > current.powerLevel ? prev : current
      );
      // Display most powerful superhero details
      console.log('Most Powerful Superhero:', mostPowerful);
    }
  };


  const showAllSuperheroes = () => {
    superheroes.forEach((superhero) => {
      // Display details of all superheroes
      console.log('Superhero:', superhero);
    });
  };



  return (
      <div className="App">
        <InputTags/>
        <Card/>
      </div>
  );
}

export default App;
