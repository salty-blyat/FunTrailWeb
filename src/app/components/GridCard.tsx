"use client";
import Image1 from "@public/assets/cabin.jpg";
import Image2 from "@public/assets/resort.jpg";
import Image3 from "@public/assets/spa.jpg";
import Image4 from "@public/assets/temple.jpg";
import Image from "next/image";
import Link from "next/link";

function GridCard() {  
  
  const imagesPerPage = 4;
  const slides = [
    { src: Image1.src, label: "Cabin", link: "#" },
    { src: Image2.src, label: "Resort", link: "#" },
    { src: Image3.src, label: "Spa", link: "#" },
    { src: Image4.src, label: "Temple", link: "#" },
  ];

  // Slice to get only the first `imagesPerPage` images
  const currentSlides = slides.slice(0, imagesPerPage);

  return (
    <>
      <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
        Discover your new favorite stay
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4  gap-4  px-4 md:px-0">
        {currentSlides.map((slide, index) => (
          <Link
            href={slide.link}
            key={index}
            className="relative transition-transform duration-300 group h-64"
          >
            <Image
              src={slide.src}
              alt={slide.label}
              width={1000}
              height={1000}
              className="w-full h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            />

            <p className="absolute bottom-2 left-2 bg-black text-white p-1 rounded">
              {slide.label}
            </p>
          </Link>
        ))}
      </div> 
    </>
  );
}
export default GridCard; 