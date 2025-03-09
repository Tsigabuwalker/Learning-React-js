import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Students from "./Students.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
function App() {
  return(
    <div>
<Header />

<Food />
<Card />
<Card />
<Card />
<Card />
<Button />
<Students name="John Doe" age={30} isStudent={true} />
<Students name="Hagos" age={25} isStudent={false} />
<Students name="Janohy" age={28} isStudent={true} />
<UserGreeting isLoggedIn={true} username="man_A3" />
<UserGreeting isLoggedIn={false} username="Batasha_Sn" />
<UserGreeting isLoggedIn={true} username="Jane Doe" />


<List />

<Footer />

    </div>
    

  );
  
  
}

export default App
