import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import './App.css';

function App() {

  return (
    <div className="App">
      <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <Home></Home>
        <About></About>
        <Services></Services>
        <Blog></Blog>
        <Contact></Contact>
    </div>
  );
}

export default App;
