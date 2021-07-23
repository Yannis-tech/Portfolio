import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <AboutMe />
        <Experience />
        <Portfolio />
    </div>
  );
}

export default App;
