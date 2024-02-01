import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
// import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import  GoToTop  from "./components/Extra/GoToTop";
import React,{useEffect} from 'react';

function App() {
  useEffect(() =>{
    fetch("/api")
    .then((res) =>res.json())
    .then((data) =>{console.log(data)})
  }, [])
  return (
    <div className="App">
      
      <NavBar />
      <Banner />
      <Projects />
      <About />
      {/* <Contact /> */}
      <GoToTop/>
      <Footer />
    </div>
  );
}

export default App;
