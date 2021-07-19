import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";


function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <AboutMe />
        <Experience />
    </div>
  );
}

export default App;
