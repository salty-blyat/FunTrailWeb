'use client';
import Image1 from '@/app/assets/cabin.jpg';
import Image2 from '@/app/assets/resort.jpg';
import Image3 from '@/app/assets/spa.jpg';
import Image4 from '@/app/assets/temple.jpg';
import Link from "next/link";
// Updated image source
function SlideBar() {
  const slide = {
    imgSrc: '/image_login/swim.webp', // Ensure this is the correct path relative to the public directory
    title: 'Swimming .A magnificent Sea complex in Cambodia ....',
    description: 'Trending DestinationTrending Destination.',
  };

  function ProductCard() {
    const imagesPerPage = 4;
    const slides = [
      { src: Image1.src, label: 'Cabin', link: '#' },
      { src: Image2.src, label: 'Resort', link: '#' },
      { src: Image3.src, label: 'Spa', link: '#' },
      { src: Image4.src, label: 'Temple', link: '#' },
     
    ];

    // Slice to get only the first `imagesPerPage` images
    const currentSlides = slides.slice(0, imagesPerPage);

    return (
      <div className="bg-white p-12">
        {/* Top Banner Section */}
        <div className="p-6 rounded-lg mb-8 flex flex-col items-center md:flex-row md:justify-between md:items-center">
          {/* Discover Section */}
          <div className="w-full">
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
              Discover your new favorite stay
            </h3>
            <div className="relative flex items-center justify-center">
              <div className="w-full h-64 flex overflow-x-auto gap-4 px-4 md:px-0">
                {currentSlides.map((slide, index) => (
                  <a
                    href={slide.link}
                    key={index}
                    className="relative flex-shrink-0 w-1/5 md:w-1/5 transition-transform duration-300 group"
                  >
                    <img
                      src={slide.src}
                      alt={slide.label}
                      className="w-full h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                    />
                    <p className="absolute bottom-2 left-2 bg-black text-white p-1 rounded">
                      {slide.label}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with Background Image */}
        <div className="relative w-full h-[600px] lg:h-[500px] rounded-lg">
          <img
            src={slide.imgSrc}
            alt="Slide"
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-8 lg:px-20 rounded-3xl">
            <h1 className="text-white text-3xl lg:text-5xl font-bold max-w-lg">
              {slide.title}
            </h1>
            <p className="text-white text-lg lg:text-xl mt-4 max-w-xl">
              {slide.description}
            </p>
            <button className="mt-6 w-40 py-3 bg-black text-white text-lg font-semibold flex items-center justify-center hover:bg-gray-800">
              Explore <span className="ml-2">&#10142;</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <ProductCard />;
}

export default SlideBar;
