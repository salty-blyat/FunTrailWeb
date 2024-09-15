import Image from 'next/image';
import Link from 'next/link';

const TrendingDestination = () => {
  return (
    <div className="max-w-7xl mx-auto mt-8">
      <div className=" rounded-lg p-6 mb-4">
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-2">Trending Destination</h2>
        {/* Description */}
        <p className="text-gray-600 mb-4">
          Angkor Wat, a magnificent temple complex in Cambodia, is renowned for its intricate architecture and historical significance. Stunning and iconic.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Image */}
          <div className="w-full h-auto duration-300 hover:scale-95">
            <Link href="/destination/angkor-wat">
                <Image
                  src="/province/kor1.jpg"
                  alt="Angkor Wat"
                  className="rounded-lg object-cover"
                  layout="responsive"
                  width={800}
                  height={500}/>
            </Link>
          </div>
          <div className="w-full h-auto duration-300 hover:scale-95">
            <Link href="/destination/another-temple">
                <Image
                  src="/province/kor.jpg"
                  alt="Another Temple"
                  className="rounded-lg object-cover"
                  layout="responsive"
                  width={800}
                  height={500}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingDestination;
