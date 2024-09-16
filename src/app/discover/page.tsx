import SearchGroup from "../components/SearchGroup";
import CarouselExplore from "../components/CarouselExplore";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TrendingDestination from "../components/TrendingDestination";
import PromoSection from "../components/PromoSection";

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
