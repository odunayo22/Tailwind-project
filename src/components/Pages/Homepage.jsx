import React from 'react';

import NavLinking from '../NavLinking';
import Hero from '../Hero';
import About from '../About';
import Support from '../Support';

import All from '../All';
import Pricing from '../Pricing';
import Footer from '../Footer';


const Homepage = () => {
  return (
    <div name="home">
      <NavLinking />
      <Hero />
      <About />
      <Support />
      <All />
      <Pricing/>
      <Footer />
    </div>
  )
}

export default Homepage;