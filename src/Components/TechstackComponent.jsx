import { hover } from '@testing-library/user-event/dist/hover'
import fluttersvg from '../Assets/icons/fluttersvg.svg'
import reactsvg from '../Assets/icons/reactsvg.svg'
import firebasesvg from '../Assets/icons/firebasesvg.svg'
import javasvg from '../Assets/icons/javasvg.svg'
import javascriptsvg from '../Assets/icons/javascriptsvg.svg'
import nodesvg from '../Assets/icons/nodesvg.svg'
import androidsvg from '../Assets/icons/androidsvg.svg'

import TechstackComponentCss from './TechstackComponent.module.css'
import { useEffect, useRef, useState } from 'react';

const TechstackComponent = () => {

    const techList = [
        {name: 'Flutter', image: fluttersvg, saturation: false, gradientHigh: 'rgba(28,188,252,0.3)', gradientMid: '#2596be'},
        {name: 'React', image: reactsvg, saturation: false, shadowcolor: 0xffffffff,gradientHigh: 'rgba(180,226,240,0.5)', gradientMid: '#2596be', },
        {name: 'Firebase', image: firebasesvg, saturation: false, shadowcolor: 0xffffffff,gradientHigh: 'rgba(251,202,36,0.5)', gradientMid: '#2596be'},
        {name: 'Node', image: nodesvg, saturation: false, shadowcolor: 0xffffffff,gradientHigh: 'rgba(118, 208, 26,0.45)', gradientMid: '#2596be'},
        {name: 'Java', image: javasvg, saturation: false, shadowcolor: 0xffffffff,gradientHigh: 'rgba(234, 101, 4,0.5)', gradientMid: '#2596be'},
        {name: 'JavaScript', image: javascriptsvg, saturation: false, shadowcolor: 0xffffffff,gradientHigh: 'rgba(249, 226, 8, 0.5)', gradientMid: '#2596be'},
        {name: 'android', image: androidsvg, saturation: false, shadowcolor: 0xffffffff,gradientHigh: 'rgba(150, 185, 90,0.5)', gradientMid: '#2596be'},
        {name: 'Flutter', image: fluttersvg, saturation: false, shadowcolor: 0xffffffff,gradientHigh: 'rgba(28,188,252,0.3)', gradientMid: '#2596be'}
    ]

    useEffect(()=>{
        setTechnologies(prevTechnologies =>
            prevTechnologies.map((tech, index) =>
             ({ ...tech, saturation: false })
            ))
    },[])


    const [technologies, setTechnologies] = useState(techList)

    // const gridCal = () => {
    //     for(let i=2; i<= technologies.length; i++){
            
    //     }
    // }

    const hoverHandler = (prop,techIn) => {
        console.log("Hover")
        
        let status = techIn.saturation
        let tempList = techList;
        setTechnologies(technologies.map((tech) => {tech.name === techIn.name ? tech.saturation = !status : tech.saturation = false;return tech}))
    }

    return <>
    <div style={{display: 'flex', backgroundColor: 'transperant'}}>
    {
    technologies.map((tech) => {
        return <div><img src={tech.image} alt={tech.name} key={tech.name} style= {{padding: '24px', height: '128px',transform: `scale(${tech.saturation ? 0.95 : 1})` , transitionDuration: '10ms', filter: `saturate(${tech.saturation ? 150 : 0}%)`, transition: 'filter 0.5s linear', background: tech.saturation ? `radial-gradient(${tech.saturation ? `${tech.gradientHigh} 15%` : 'transparent'},  transparent, transparent)`: 'transparent'}} onMouseLeave={() => hoverHandler(this, tech)} onMouseOver={() => hoverHandler(this, tech)} /></div>  
    })
    }
    </div>
    </>

}

export default TechstackComponent;