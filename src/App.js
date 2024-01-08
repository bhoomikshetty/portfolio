import logo from './logo.svg';
import './App.css';
import { Route, Routes, Router } from 'react-router-dom';
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Projects from './Pages/About.jsx'
import Experience from './Pages/About.jsx'
import ListAnimationComponent from './Components/ListAnimation.jsx';
import { useState } from 'react';

function App() {

  const [mousePosition,setMousePosition] = useState({
    x: 0, y: 0
  });

  return (
    <div className='App' onMouseMove={
        (props)=>{
          setMousePosition({
            x : props.clientX,
            y : props.clientY
        })
        }
      }>  
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/#about" component={<ListAnimationComponent/>} />
        </Routes>     
      </div>
      <div
        style={{
            height: '72px', 
            width: '72px', 
            borderRadius: '50%', 
            backgroundColor: 'white',
            position: 'relative',
            left : 0,
            top: 0,
        }}>
      </div>
    </div>
  );
}

export default App;
