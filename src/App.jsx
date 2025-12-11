import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import User from "./component/User";
import Github from "./component/Github";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/github" element={<Github />} />
      <Route path="/user/:userid" element={<User />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  </>
  );
}

export default App;
