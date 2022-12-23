import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from './pages/Home'
import Gallery from "./pages/Gallery";

function App() {
  return (
    // <BrowserRouter>
    // <Routes>
    //   <Route path="/" element={<Home/>}/>
    //   <Route path="/contact" element={<Contact/>}/>
    //   <Route path="/gallery" element={<Gallery/>}/>
    // </Routes>
      
    // </BrowserRouter>
      <Gallery/>
    
  );
}

export default App;
