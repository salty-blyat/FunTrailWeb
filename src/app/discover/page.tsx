import CarouselExplore from "../home/components/CarouselExplore";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PromoSection from "../components/PromoSection";
import TrendingDestination from "../components/TrendingDestination";

const Discover = () => {
  return (
    <>
      <Navbar /> 
      <main>
      <TrendingDestination/>
      <TrendingDestination/>
        <div className="container px-4 mx-auto space-y-6  "> 
          <PromoSection />
          <CarouselExplore />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Discover;
