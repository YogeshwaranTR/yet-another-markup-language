import "./App.css";
import Resume from "./Resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from "./Project";
import Contact from "./Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Resume />}></Route>
          <Route exact path="/project" element={<Project />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
