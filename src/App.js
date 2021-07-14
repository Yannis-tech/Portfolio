import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";


function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <AboutMe />
    </div>
  );
}

export default App;
