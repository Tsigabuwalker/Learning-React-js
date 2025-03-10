import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Students from "./Students.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
function App() {
  const fruits = [
    {
      id:1,name:"apple", calories: 110
    },
    {
      id:1,name:"banana", calories: 120
    },
    {
      id:1,name:"cake", calories: 130
    },
    {
      id:1,name:"Orange", calories: 140
    }];


    const vegetables = [
      {
        id:1,name:"potatoes", calories: 90
      },
      {
        id:1,name:"celery", calories: 100
      },
      {
        id:1,name:"carrots", calories: 150
      },
      {
        id:1,name:"carrots", calories: 149
      }];
    
  




  return(
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


<List items={fruits} category="fruits"/>
<List items={vegetables} category={"vegetables"} />

<Footer />

    </div>
    

  );
  
  
}

export default App
