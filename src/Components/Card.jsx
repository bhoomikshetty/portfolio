


const CardComponent = (props) =>{

    console.log(props.width);
    return (<div style={{height: '75vh', minWidth: `${75}vh`}}>
    <p style={{color: 'white'}}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
</div>)
}


export default CardComponent;