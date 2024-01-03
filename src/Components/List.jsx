import ListAnimationComponent from "./ListAnimation";
import CardComponent from "./Card";

const ListComponent = () => {

    return (
    <div style={{display: 'flex', overflowX: 'scroll', overflowY: 'hidden'}}>
            <CardComponent width={100} />
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
    </div>)
}

export default ListComponent;