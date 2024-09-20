import Image from "next/image";
import img from "@public/image_login/swim.webp";
import { ArrowRightOutlined } from "@ant-design/icons";

const ImagePanel = () => {
  const slide = {
    imgSrc: img,
    title: "Swimming .A magnificent Sea complex in Cambodia ....",
    description: "Trending DestinationTrending Destination.",
  };
  return (
    <div className="relative w-full h-[600px] lg:h-[500px] rounded-lg">
      <Image
        src={slide.imgSrc}
        alt="Slide"
        className="absolute inset-0 w-full h-full object-cover rounded-3xl"
        width={1000}
        height={1000}
      />
      <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-8 lg:px-20 rounded-3xl">
        <h1 className="text-white text-3xl lg:text-5xl font-bold max-w-lg">
          {slide.title}
        </h1>
        <p className="text-white text-lg lg:text-xl mt-4 max-w-xl">
          {slide.description}
        </p>
        <button className="mt-6 w-40 py-3 bg-black text-white text-lg font-semibold flex items-center justify-center hover:bg-gray-800">
          Explore <ArrowRightOutlined className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ImagePanel;
