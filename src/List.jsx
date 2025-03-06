function List(){

    const fruits = ["Apple ", " Banana", " Orange", " pinapple", " Coucunt"]
    const listItems = fruits.map(fruit => (<li>{fruit}</li>))
    return(
        <ul>
            {listItems}
        </ul>
    )
    
} 
export default List