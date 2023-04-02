import "./App.css";
import Banner from "./components/Banner/Banner";
import Feature from "./components/Feature/Feature";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="backdrop"></div>
      <div className="App">
        <Navbar />
        <Banner />
        <Feature />
      </div>
    </>
  );
}

export default App;
