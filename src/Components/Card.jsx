import { useState, useEffect, useRef } from "react";

const CardComponent = (props) =>{

    const componentRef = useRef(null)
    const [showShadow, setShowShadow] = useState(false);

    const handleIntersection = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                

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

    return (<div ref={componentRef} style={{height: '75vh', minWidth: `${75}vh`, padding: '64px 0px'}}>
    <div style={{margin: '0px 24px', height: '75%',color: 'white', backgroundPosition: 'center', backgroundSize: `${showShadow ? 100 : 110}%`, backgroundImage:'url(https://images.unsplash.com/photo-1547721064-da6cfb341d50)',  borderRadius: '32px', boxShadow: `0px 0px ${showShadow ? 30 : 5}px white`, transform:`scale(${showShadow ? 1.05 : 1})`, display:'flex', justifyContent:'center', transition: 'box-shadow 0.25s, transform 0.25s ease-in, background-size 0.25s ease-in'}} onMouseLeave={()=>{setShowShadow(false)}} onMouseOver={()=>{setTimeout(()=>setShowShadow(true),50)}}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</div>
</div>)
}


export default CardComponent;