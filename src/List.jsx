function List() {
    const fruits = ["Apple", "Banana", "Orange", "Pineapple", "Coconut"];
    fruits.sort();
    const listItems = fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
    ));

    return (
        <ol>
            {listItems}
        </ol>
    );
}

export default List;