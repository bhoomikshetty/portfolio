import TechstackComponent from '../Components/TechstackComponent';
import NavbarComponent from '../Components/Navbar';
import ListAnimationComponent from '../Components/ListAnimation';

export default function Home(){
    return (<>
        <div style={{width: '100vh', height: '80vh'}}></div>
        
        <div style= {{top: 32, zIndex: 100, position: 'sticky', display: 'flex', justifyContent: 'center'}}>
        <NavbarComponent/>
        </div>
        
        <p style={{color:'white', fontSize: '64px', display:'flex', justifyContent: 'center'}}>Technologies I think I know</p>
        <div style= {{display: 'flex', justifyContent: 'center'}}>
            <TechstackComponent/>
        </div>
        <div style={{display: 'flex', justifyContent: 'start'}}>
            <ListAnimationComponent/>
        </div>
    </>)
}