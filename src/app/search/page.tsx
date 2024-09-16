import React from 'react';
import ListingSection from '../components/ListingSection';
import FilterSection from '../components/FilterSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MapEmbed from '../components/MapEmbed';
import { Pagination } from 'antd';
import Hero from '../components/Hero';



const PageLayout = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <div className="mx-auto container flex justify-between gap-5 py-5">
        {/* Filter Section and MapEmbed in the same column */}
        <div className="w-1/5 ml-[-90px] flex flex-col space-y-5">
          <FilterSection />
          <MapEmbed />
        </div>
        {/* Listings Section */}
        <div className="w-[80%] space-y-5">
          <ListingSection />
          <ListingSection />
          <ListingSection />
          <ListingSection />
        </div>
        
      </div>
      <Pagination/>
      <Footer/>
    </>
  );
};

export default PageLayout;
