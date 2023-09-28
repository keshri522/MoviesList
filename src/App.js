import "./App.css";
import Navbar from "./components/header/navbar";
import Movies from "./components/movies/movies";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Movies></Movies>
    </div>
  );
}

export default App;
