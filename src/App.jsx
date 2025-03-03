import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Students from "./Students.jsx";
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

<Footer />

    </div>
    

  );
  
  
}

export default App
