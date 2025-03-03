// Define the isLoggedIn function
function isLoggedIn(props) {
    return props.isLoggedIn; // Assuming this prop indicates login status
}

function UserGreeting(props) {
    if (isLoggedIn(props)) {
        return <h1>Welcome, {props.username}!</h1>;
    } else {
        return <h1>Please log in to see your username.</h1>; // Handling the else case
    }
}

export default UserGreeting;