import SearchGroup from "../components/SearchGroup";
import CarouselExplore from "../components/CarouselExplore";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import GridCard from "../components/GridCard";
import ImagePanel from "../components/ImagePanel";

const Home = () => {
  return (
    <>
      <Navbar /> {/* make navbar sticky on top */}
      <main>
        <Hero />
        <div className="container px-4 mx-auto space-y-6  "> 
          <SearchGroup /> {/* make this responsive */}
          <GridCard /> {/* make this responsive */}
          <ImagePanel />
          <CarouselExplore />
        </div>
      </main>
      <Footer />
    </>
  );
};


export default Home;
