
import BottomSlide from "../components/BottomSlide"
import Navbar from "../components/Navbar"
import ProductCard from "../components/ProductCard"
import SlideBar from "../components/SlideBar"
import Explore from "../components/Explore"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
      <Navbar />
      <SlideBar />
      <BottomSlide />
      <ProductCard />
      <Explore/>
      <Footer/>
    </>
  )
}

export default Home