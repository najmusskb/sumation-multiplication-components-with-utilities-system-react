import logo from './logo.svg';
import './App.css';
import Cosmetics from './components/Cosmetics/Cosmetics';
import Shoes from './components/Shoes/Shoes';
import Bag from './components/bag/Bag';

function App() {
  return (
    <div className="App">
     <Cosmetics></Cosmetics>
     <Shoes></Shoes>
     <Bag></Bag>
    </div>
  );
}

export default App;
