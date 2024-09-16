import Image from 'next/image';

const PromoSection = () => {
  return (
    <div className="bg-teal-800 py-12 px-6 rounded-lg flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto min-h-[500px] space-y-8 md:space-y-0 md:space-x-6">
      {/* Left Section - Promo Text */}
      <div className="text-white font-bold text-5xl md:text-6xl text-center md:text-left">
        <p>SAVE</p>
        <p>BIG ON</p>
        <p>YOUR</p>
        <p>FIRST</p>
        <p>OFFER!</p>
      </div>

      {/* Right Section - Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {/* Promo Card */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
          <Image
            src="/province/promo.jpg" // replace with the actual promo image path
            alt="Travel Promo"
            width={280}
            height={380}
            className="rounded-md object-cover"
          />
          <p className="text-center mt-4 text-lg font-semibold">Limited offer</p>
        </div>

        {/* Destination Card 1 */}
        <div className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center">
          <Image
            src="/province/sreab.jpg" // replace with the actual image path
            alt="Beach View"
            width={240}
            height={300}
            className="rounded-md object-cover "
          />
          <div className="mt-4">
            <p className="font-semibold text-lg">Demo</p>
            <p className="text-gray-500 text-sm">Rating 5/5</p>
            <p className="text-gray-500 text-sm">300 Visited</p>
            <p className="mt-2 text-right text-teal-800 font-bold mr-5">100$</p>
          </div>
        </div>

        {/* Destination Card 2 */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
          <Image
            src="/province/penh.jpg" // replace with the actual image path
            alt="Beach View"
            width={240}
            height={300}
            className="rounded-md object-cover"
          />
          <div className="mt-4">
            <p className="font-semibold text-lg">Demo</p>
            <p className="text-gray-500 text-sm">Rating 5/5</p>
            <p className="text-gray-500 text-sm">300 Visited</p>
            <p className="mt-2 text-right text-teal-800 font-bold mr-5">100$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;
