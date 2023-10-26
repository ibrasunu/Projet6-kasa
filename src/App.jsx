import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./styles/app.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import FichLogement from "./pages/FichLogment";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
         {/* Use of the Home component to display all elements of the Home page */}
        <Route path ="/" element={<Home />} /> 

         {/* Use of the About component to display all elements of the About page */}
        <Route path="/about" element={<About />} />

         {/* Use of the Lodging component to display all elements of the Lodging page */}
        <Route path="/logement/:id" element={<FichLogement />} />

         {/* Use of the Error component to display all elements of the 404 page */}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

