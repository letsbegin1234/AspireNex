import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Success from "./components/Success";
import Failure from "./components/Failure";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (

    <Router>

      <Routes>
        <Route exact path="/" element={<div>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Work />
          <Contact />
        </div>} />
        <Route exact path="/success" element={<Success />} />
        <Route exact path="/failure" element={<Failure />} />
        <Route path="*" element={<Failure />} />

      </Routes>
    </Router>

  );
}

export default App;
