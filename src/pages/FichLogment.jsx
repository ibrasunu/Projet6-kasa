import React from "react";
import FicheLogementDisplay from "../components/FicheLogementDisplay";
import Footer from "../components/Footer";
import Header from "../components/Header";

const FichLogment = () => {
  return (
    <div className="logement">
      <Header />
      <main>
        <FicheLogementDisplay />
      </main>

      <Footer />
    </div>
  );
};

export default FichLogment;
