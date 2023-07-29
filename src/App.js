import './App.css';
import About from './components/About/About';
import Contact from './components/Conract/Contact';
import Educacion from './components/Educacion/Educacion';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import { Projects } from './components/Projects/Project';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Educacion/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;