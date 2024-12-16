
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Saat from './Components/Saat';
import Taymer from './Components/Taymer';
import SaniyeOlcen from './Components/SaniyeOlcen';
import { Menu } from './Components/Menu';
function App() {
  return (
    <div className="App">

    <Menu/>
      
      <Routes>
          <Route path='/saat' element={<Saat />} />
          <Route path='/taymer' element={<Taymer />} />
          <Route path='/saniyeolcen' element={<SaniyeOlcen />} />
      </Routes>
    </div>
  );
}


export default App;