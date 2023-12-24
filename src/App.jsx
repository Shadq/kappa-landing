import React from "react";
import Info from "./components/Info";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Charts from "./components/Charts";
import Buy from "./components/Buy";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-black ">
      <Header />
      <Hero />
      <Info />
      <Charts />
      <Buy />
      <Footer />
    </div>
  );
};

export default App;
