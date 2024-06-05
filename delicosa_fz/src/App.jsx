import React from 'react';
import Navbar from '../src/Components/Navigation_Bar/Navbar';
import Testimonials from '../src/Components/TestimonialCard/Testimonials';
import Footer from '../src/Components/Footer/Footer';
import  Carouselcomp from "./Components/Carousel/Carouselcomp"
import AllAchievement from './Components/Achievements/AllAchievement';
import CompanyIntro from './Components/Introdunctionhome.jsx/CompanyIntro';
import CartPage from './Components/CartPage/CartPage';
const App = () => {
  return (
    <div>
      {/* <Navbar />
      <Carouselcomp/>
      <CompanyIntro/>
      <Testimonials/>
      <AllAchievement/>
      <Footer /> */}
      <Navbar />
      <CartPage/>
      <Footer /> 
    </div>
  );
};

export default App;
