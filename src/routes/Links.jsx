import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import AboutUs from '../pages/AboutUs';

// Sub-service detail pages
import RetainingWalls from '../pages/ServicePages/RetainingWalls';
import PoleWalls from '../pages/ServicePages/PoleWalls';
import BlockWalls from '../pages/ServicePages/BlockWalls';
import ConcreteWalls from '../pages/ServicePages/ConcreteWalls';
import WallRepairs from '../pages/ServicePages/WallRepairs';
import Landscaping from '../pages/ServicePages/Landscaping';
import PilingDrilling from '../pages/ServicePages/PilingDrilling';
import Anchors from '../pages/ServicePages/Anchors';
import MicropilesGrouting from '../pages/ServicePages/MicropilesGrouting';
import OurWork from '../pages/OurWork';

const Links = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/our-work" element={<OurWork />} />

      {/* Sub-service routes */}
      <Route path="/services/retaining-walls" element={<RetainingWalls />} />
      <Route path="/services/pole-walls" element={<PoleWalls />} />
      <Route path="/services/block-walls" element={<BlockWalls />} />
      <Route path="/services/concrete-walls" element={<ConcreteWalls />} />
      <Route path="/services/wall-repairs" element={<WallRepairs />} />
      <Route path="/services/landscaping" element={<Landscaping />} />
      <Route path="/services/piling-drilling" element={<PilingDrilling />} />
      <Route path="/services/anchors" element={<Anchors />} />
      <Route path="/services/micropiles-grouting" element={<MicropilesGrouting />} />
    </Routes>
  );
};

export default Links;
