import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import WhatIDo from "./pages/WhatIDo";
import Work from "./pages/Work";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <WhatIDo />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
