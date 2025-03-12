import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Students from "./Students.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import ProfilePicture from "./ProfilePicture.jsx"; // Capitalized
import MyComponent from "./MyComponents.jsx";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 110 },
    { id: 2, name: "banana", calories: 120 }, // Changed id to 2
    { id: 3, name: "cake", calories: 130 }, // Changed id to 3
    { id: 4, name: "Orange", calories: 140 } // Changed id to 4
  ];

  const vegetables = [
    { id: 1, name: "potatoes", calories: 90 },
    { id: 2, name: "celery", calories: 100 }, // Changed id to 2
    { id: 3, name: "carrots", calories: 150 }, // Changed id to 3
    { id: 4, name: "beets", calories: 149 } // Changed id to 4 and name to "beets"
  ];

  return (
    <div>
      <Header />
      <Food />
      <Card />
      <Card />
      <Card />
      <Card />
      <br />
      <Button />
      <Students name="John Doe" age={30} isStudent={true} />
      <Students name="Hagos" age={25} isStudent={false} />
      <Students name="Janohy" age={28} isStudent={true} />
      <UserGreeting isLoggedIn={true} username="man_A3" />
      <UserGreeting isLoggedIn={false} username="Batasha_Sn" />
      <UserGreeting isLoggedIn={true} username="Jane Doe" />
      <ProfilePicture /> 
      <MyComponent />

      <List items={fruits} category="fruits" />
      <List items={vegetables} category="vegetables" />
      

      <Footer />
    </div>
  );
}

export default App;