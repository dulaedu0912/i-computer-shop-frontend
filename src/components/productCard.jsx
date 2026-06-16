export default function ProductCard(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <p>LKR {props.price}</p>
        </div>
    )
}