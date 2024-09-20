"use client";
import Navbar from "../components/Navbar";
import Hero from "@home/components/Hero";
import SearchGroup from "@home/components/SearchGroup";
import GridCard from "@home/components/GridCard";
import ImagePanel from "@home/components/ImagePanel";
import BentoBox from "@home/components/BentoBox";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="container relative px-4 mx-auto  ">
          <SearchGroup className="absolute -top-10 left-10 right-10 " />
          <BentoBox className="pt-36" /> 

          <ImagePanel />
          {/* <CarouselExplore /> */}
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
