import BottomSlide from "../components/BottomSlide"
import Navbar from "../components/Navbar"
import ProductCard from "../components/ProductCard"
import SlideBar from "../components/SlideBar"


const Home = () => {
  return (
    <>
      <Navbar />
      <SlideBar />
      <BottomSlide />
      <ProductCard />
    </>
  )
}

export default Home