import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";
import MyWork from "./components/MyWork";

function App() {
  return (
    //TODO: revisar app-container en classname

    <div className="app-container container-fluid">
      <div className="row flex-nowrap">
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/mywork" element={<MyWork />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
