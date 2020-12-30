import Navigation from "./Navigation";
import Routes from "./Routes";
import { Container } from "reactstrap"; 

function App() {
  return (
    <div className="App">
      <Navigation />
      <Container>
        <Routes />
      </Container>
    </div>
  );
}

export default App;
