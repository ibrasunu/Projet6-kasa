import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import imgHomeBanner from "../assets/homeBanner.png"


const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <Banner texte="Chez vous, partout et ailleurs" image={imgHomeBanner} />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
