import './App.css';
import Header from "./Header"
import Container from "./Container"

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Container/>
    </div>
  );
}

export default App;


/* app components: kitty shelter

shelter has many cats
cats belong to one shelter

----header

----home page: list of cats that need adoption(GET) + (cards rendered with adopt button(DELETE), name, age, breed, image, behavior)

----shelter kitty page: page with form to take in a kitty from the rain(POST) creates a new kitty for the shelter

----update kitty info: form component to edit the info on existing kitties(PATCH)

*/