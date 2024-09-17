import React from 'react';
import ProductItem from '../components/ProductItem.tsx';
import FilterSection from '../components/FilterSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MapEmbed from '../components/MapEmbed';
import Hero from '../components/Hero';

const PageLayout = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <div className="container mx-auto grid grid-cols-3 space-x-5 py-7">
        {/* Filter Section and MapEmbed in the same column */}
        <div className="col-span-1 md:block space-y-5 hidden  ">
          <FilterSection />
          <MapEmbed />
        </div>
        {/* Listings Section */}
        <div className="space-y-5 col-span-2">
        <ProductItem/>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default PageLayout;
