import logo from './logo.svg';
import './App.css';
import {Routes, Route, NavLink} from 'react-router-dom';

import Home from './pages/home';
import Contact from './pages/contact';
import Projects from './pages/projects';
import CV from './pages/cv';

import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
      {/* <header className="App-header">
        <nav>
          <NavLink to="/" style={{color: "white"}}>Home</NavLink>
          <NavLink to="/contact">Contact me</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </nav>
        </header> */}
        {/* <Home></Home> */}
        {/* <Contact></Contact> */}
        {/* <Projects></Projects> */}
        
      </main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/cv" element={<CV/>}/>
      </Routes>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
