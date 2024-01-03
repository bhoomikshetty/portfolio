import TechstackComponent from '../Components/TechstackComponent';
import NavbarComponent from '../Components/Navbar';
import ListComponent from '../Components/List';
import ListAnimationComponent from '../Components/ListAnimation';
import CardComponent from '../Components/Card';

export default function Home(){
    // console.log(<CardComponent/>);
    console.log(CardComponent());

    return (<>
        <div style={{width: '100vh', height: '80vh'}}/>
        <div style= {{top: 32, zIndex: 100, position: 'sticky', display: 'flex', justifyContent: 'center'}}>
            <NavbarComponent/>
        </div>
        <p style={{color:'white', fontSize: '64px', display:'flex', justifyContent: 'center'}}>Technologies I think I know</p>
        <div style= {{display: 'flex', justifyContent: 'center'}}>
            <TechstackComponent/>
        </div>
        {/* <ListAnimationComponent child={<CardComponent/>}/> */}
        {/* {console.log("Here it is" + <CardComponent/> + CardComponent({width: 100}))} */}
        <ListComponent/>
    </>)
}