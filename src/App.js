import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import  GoToTop  from "./components/Extra/GoToTop";

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <Banner />
      {/* <Skills /> */}
      <Projects />
      <About />
      <Contact />
      <GoToTop/>
      <Footer />
    </div>
  );
}

export default App;
