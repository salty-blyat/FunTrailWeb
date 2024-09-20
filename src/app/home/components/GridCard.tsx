"use client";
import Image1 from "@public/assets/cabin.jpg";
import Image2 from "@public/assets/resort.jpg";
import Image3 from "@public/assets/spa.jpg";
import Image4 from "@public/assets/temple.jpg"; 
import Image from "next/image";
import Link from "next/link";
import { Typography } from "antd";

const { Title } = Typography;

function GridCard({ className = '' }: { className: string }) {
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
    <section className={`${className}  `}>
      <Title level={3} className="text-2xl font-semibold mb-6  md:text-left">
        Discover your new favorite stay
      </Title>
      <div className="grid grid-cols-2 md:grid-cols-4  gap-4  px-4 md:px-0">
        {currentSlides.map((slide, index) => (
          <Link href={slide.link} key={index}>
            <Image
              src={slide.src}
              alt={slide.label}
              width={500}
              height={500}
              className="h-60 transition-transform duration-300 hover:scale-105 object-cover rounded-lg"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
export default GridCard;
