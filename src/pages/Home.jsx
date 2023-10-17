import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import imgHomeBanner from "../assets/homeBanner.png"


const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <Banner texte="Chez vous, partout et ailleurs" image={imgHomeBanner} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
