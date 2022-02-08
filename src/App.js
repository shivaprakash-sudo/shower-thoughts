import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content container">
        <Home />
      </div>
    </div>
  );
}

export default App;
