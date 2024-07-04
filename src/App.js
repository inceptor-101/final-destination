import {Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar';
import Networks from './components/networks';
import Machines from './components/machines';
import ECO from './components/economics';
import Power from './components/power';
import ADA from './components/ada';
import Upload from './components/upload';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route path='/ada' element={<ADA/>}></Route>
          <Route exact path='/' element={<Upload/>}></Route>
          <Route path='/net' element={<Networks/>}></Route>
          <Route path='/mac' element={<Machines/>}></Route>
          <Route path='/eco' element={<ECO/>}></Route>
          <Route path='/power' element={<Power/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
