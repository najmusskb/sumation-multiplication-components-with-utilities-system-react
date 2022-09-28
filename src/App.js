import logo from './logo.svg';
import './App.css';

import Shoes from './components/Shoes/Shoes';
import Bag from './components/bag/Bag';
import Cosmetics from './components/cosmetices/Cosmetics';


function App() {
  return (
    <div className="App">
   
     <Shoes></Shoes>
     <Bag></Bag>
     <Cosmetics></Cosmetics>
    </div>
  );
}

export default App;
