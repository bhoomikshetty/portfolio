import { useEffect, useRef, useState } from 'react';
import codesvg from '../Assets/icons/codesvg.svg';

const ListAnimationComponent = (props) => {

    const purpleColor = '#7c72ff'
    const greenColor = '#3fb950'
    const lightblueColor = '#79c0ff'
    const pinkColor = '#f778ba'

    const [divHeight, setDivHeight] = useState(0)
    const [div2Height, setDiv2Height] = useState(0)
    const [logoOpacity, setLogoOpacity] = useState(0)
    const componentRef = useRef(null)

    const handleIntersection = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setDivHeight(300);
                setTimeout(() => {
                    setLogoOpacity(1);
                    setTimeout(() => {
                        setDiv2Height(300);
                    }, 750);
                }, 1500);

                // Disconnect the observer once the component is in the viewport
                observer.disconnect();
            }
        });
    };
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current);
            }
        };
    }, [componentRef]);

    
    return <>
        <div id='animation' style={{display: 'flex', justifyContent:'start'}} ref={componentRef}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div style={{height: `${divHeight}px`, borderLeft: '4px solid', borderImage: `linear-gradient(0deg,transparent, ${lightblueColor}, ${purpleColor}, transparent) 1`, transitionProperty: 'height', transitionDuration: '1.5s', transitionTimingFunction: 'ease-in-ease-out'}}></div>
                <img src={codesvg} alt='codesvg' style={{width:'64px', opacity: `${logoOpacity}`, backdropFilter: 'blur(5000px)', background: `radial-gradient(${purpleColor} 2%, transparent, transparent)`, transitionProperty: 'opacity', transitionDuration: '0.75s', transitionTimingFunction: 'ease-in-ease-out'}}/>
                <div style={{height: `${div2Height}px`, borderLeft: '4px solid', borderImage: `linear-gradient(0deg,transparent, ${greenColor}, ${lightblueColor}, transparent) 1`,  transitionProperty: 'height', transitionDuration: '1.5s', transitionTimingFunction: 'ease-in-ease-out'}}></div>
            </div>
            <div style={{width: '100%', height: '720px'}}>
                {props.child}
            </div>
        </div>
    </>

}

export default ListAnimationComponent;