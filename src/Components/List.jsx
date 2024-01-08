import ListAnimationComponent from "./ListAnimation";
import CardComponent from "./Card";

const ListComponent = () => {

    return (
    <div style={{display: 'flex', overflowX: 'scroll', overflowY: 'hidden'}}>
        {
            Array.from(Array(10)).map((item) => {
            return <CardComponent key={item}/>
            })
        }
    </div>)
}

export default ListComponent;