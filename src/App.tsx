import { dataBurgerComponents } from './utils/data';

import AppHeader from './components/AppHeader/AppHeader';
import './App.css';
import StellarBurgers from './components/StellarBurgers/StellarBurgers';



function App() {
  return (
    <div className="App">
      <AppHeader/>
      <StellarBurgers/>
    </div>
  );
}

export default App;
