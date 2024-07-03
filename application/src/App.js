import logo from './logo.svg';
import './App.css';
import Login from './Components/pages/Login';
import { Route, Routes } from 'react-router-dom';
import Main from './Components/pages/Main';
function App() {
  return (
    <div className="App w-1/2 h-1/2">
    
      <Routes>
      <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
