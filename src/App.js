import Navbar from './components/Nav/Nav'
import './App.css';

const linksArray = ['Products', 'Services', 'Overview','Contact Us'];

function App() {
  return (
    <>
      <Navbar links={linksArray}/>
    </>
  );
}

export default App;
