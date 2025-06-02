import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Program from "./Components/Program/Program";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Title subTitle="Our Program" Title="What we Offer" />
      <Program />
      <Title subTitle="About Us" Title="Know About Us" />
      <About />
      <Title subTitle="Gallery" Title="Campus Photos" />
      <Gallery />
      <Title subTitle="TESTIMONIALS" Title="What Our Student says" />
      <Testimonials />
      <Title subTitle="Contact Us" Title="Send Us your Message" />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
