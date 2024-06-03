import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./nav/NavBar";
import Javascript from "./components/Javascript";
import AdvancedJavascript from "./components/AdvancedJavascript";
import CourseReactj from "./components/CourseReactj";

function App() {
  return (
        <Router>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/javascript-desde-0" element={<Javascript/>} />
            <Route path="/javascript-advanced" element={<AdvancedJavascript/>} />
            <Route path="/reactj" element={<CourseReactj/>} />
          </Routes>
        </Router>
  );
}

export default App;