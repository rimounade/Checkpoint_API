
import './App.css';
import ListUsers from './Components/ListUsers';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import NavUsers from './Components/NavUsers';
import User from './Components/User';


function App() {
  return (
    <div className="App">
      <NavUsers/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ListUsers' element={<ListUsers/>}/>
        <Route path='/User/:id' element={<User/>}/>
        
      </Routes>
     
    
    </div>
  );
}

export default App;
