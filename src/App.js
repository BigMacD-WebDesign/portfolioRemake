import Navbar from "./components/Nav/Nav";
import AboutMe from "./components/AboutMe";
import Footer from './components/Footer/Footer'
import "./App.css";

const linksArray = ["About Me", "My Work", "Contact Me"];

function App() {
  return (
    <>
      <Navbar links={linksArray} />
      <AboutMe />
      <Footer />
    </>
  );
}

export default App;
