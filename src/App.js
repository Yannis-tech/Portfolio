import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <AboutMe />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
