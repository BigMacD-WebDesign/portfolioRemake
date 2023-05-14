import Navbar from "./components/Nav/Nav";
import AboutMe from "./components/AboutMe";
// import Container from "@mui/material";
import "./App.css";

const linksArray = ["Products", "Services", "Overview", "Contact Us"];

function App() {
  return (
    <>
      <Navbar links={linksArray} />
        <AboutMe />
    </>
  );
}

export default App;
