import logo from './logo.svg';
import './App.css';
import CardInfo from './components/CardInfo/cardInfo';
import Navbar from './components/Navbar/navbar';
import Button_molecule from './components/ButtonArray/molecule-Button';

function App() {
  const planetas = ["Mercurio", "Venus", "Tierra"]

  return (
    <div className="App">
      <Navbar title="Planets" elements={planetas}/>
      <CardInfo title="hola" description="como va"/>
      <Button_molecule/>
    </div>
  );
}

export default App;
