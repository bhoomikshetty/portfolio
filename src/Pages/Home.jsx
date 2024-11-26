import TechstackComponent from '../Components/TechstackComponent';
import NavbarComponent from '../Components/Navbar';
import ListComponent from '../Components/List';
import ListAnimation from '../Components/ListAnimation';
import AnimatedDiv from '../Components/AnimatedDiv';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Home(){

    
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0})

    return (<>
    <div>
        <div style={{width: '100vh', height: '80vh'}}/>
        <div style= {{top: 32, zIndex: 100, position: 'sticky', display: 'flex', justifyContent: 'center'}}>
            <NavbarComponent one={()=>{
            }}/>
        </div>
        <p style={{color:'white', fontSize: '64px', display:'flex', justifyContent: 'center'}}>Technologies I know</p>
        <div style= {{display: 'flex', justifyContent: 'center'}}>
            <TechstackComponent/>
        </div>
        <ListAnimation id='#about'/>
        <ListComponent/>
        <AnimatedDiv/>
        </div>
    </>)
}
