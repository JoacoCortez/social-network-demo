import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import ProfileTab from './pages/profile-tab/profile-tab';
import Register from './pages/register/register';
import Login from './pages/login/login';




function App() {

  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/profile' element={<ProfileTab/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
