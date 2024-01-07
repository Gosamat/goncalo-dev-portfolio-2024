import './App.css';
import { NavBar } from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Contacts from './Pages/Contacts/Contacts';
import Technologies from './Pages/Technologies/Technologies';
import { Element } from 'react-scroll';

function App(): JSX.Element {
  return (
    <div className="noise">
      <div className="app">
        <NavBar />
        <div>
          <Element name="home">
            <Home />
          </Element>
          <Element name="about">
            <About />
          </Element>
          <Element name="technologies">
            <Technologies />
          </Element>
          <Element name="projects">
            <Projects />
          </Element>
          <Element name="contacts">
            <Contacts />
          </Element>
        </div>
      </div>
    </div>
  );
}

export default App;
