function List() {
    const fruits = [
        { id: 0, name: "Apple", calories: 89 }, // Added id for Apple
        { id: 1, name: "Banana", calories: 90 },
        { id: 2, name: "Orange", calories: 100 },
        { id: 3, name: "Pineapple", calories: 900 },
        { id: 4, name: "Mango", calories: 233 },
        { id: 5, name: "Lemon", calories: 399 },
        { id: 6, name: "Grape", calories: 222 },
        { id: 7, name: "Cherry", calories: 444 },
        { id: 8, name: "Peach", calories: 500 },
        { id: 9, name: "Coconut", calories: 880 }
    ];
    //fruits.sort((a,b) => a.name.localeCompare(b.name)) Alphabetical order
    //fruits.sort((a,b) =>  b.name.localeCompare(a.name)) Reverse alphabetical order
    //fruits.sort((a, b) => a.calories - b.calories) Tis is a numberical order
    //fruits.sort((a, b) => b.calories - a.calories)  Reverse alphabetical order

    
    // Map through the array of fruits and create a list item for each one.
    const listItems = fruits.map((fruit) => (
        <li key={fruit.id}>
            {fruit.name}: &nbsp;
            <b> {fruit.calories} </b>
            
        </li>
    ));

    return (
        <ol>
            {listItems}
        </ol>
    );
}

export default List;