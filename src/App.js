import logo from './logo.svg';
import './App.css';
import { Route, Routes, Router } from 'react-router-dom';
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Projects from './Pages/About.jsx'
import Experience from './Pages/About.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
  );
}

export default App;
