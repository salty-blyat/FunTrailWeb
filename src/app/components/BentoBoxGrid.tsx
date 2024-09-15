import Image from 'next/image';
import Link from 'next/link';

const TrendingDestination = () => {
  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="border-2 rounded-lg p-6 mb-4">
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-2">Trending Destination</h2>
        {/* Description */}
        <p className="text-gray-600 mb-4">
          Angkor Wat, a magnificent temple complex in Cambodia, is renowned for its intricate architecture and historical significance. Stunning and iconic.
        </p>

        {/* First Row: 2 Large Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full h-auto relative group">
            <Link href="/destination/angkor-wat">
    
                <Image
                  src="/province/kor1.jpg"
                  alt="Angkor Wat"
                  className="rounded-lg object-cover"
                  layout="responsive"
                  width={800}
                  height={500}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold">Angkor Wat</h3>
                  <p className="text-sm">A magnificent temple complex with intricate architecture.</p>
                </div>
   
            </Link>
          </div>
          <div className="w-full h-auto relative group">
            <Link href="/destination/another-temple">

                <Image
                  src="/province/korong.jpg"
                  alt="Another Temple"
                  className="rounded-lg object-cover"
                  layout="responsive"
                  width={800}
                  height={500}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold">Another Temple</h3>
                  <p className="text-sm">Explore another fascinating temple.</p>
                </div>
 
            </Link>
          </div>
        </div>

        {/* Second Row: 3 Smaller Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="w-full h-auto relative group">
            <Link href="/destination/beach-view">

                <Image
                  src="/province/sreab.jpg"
                  alt="Beach View"
                  className="rounded-lg object-cover"
                  layout="responsive"
                  width={400}
                  height={300}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-md font-semibold">Beach View</h3>
                  <p className="text-xs">A stunning view of the pristine beach.</p>
                </div>
   
            </Link>
          </div>
          <div className="w-full h-auto relative group">
            <Link href="/destination/forest-view">
        
                <Image
                  src="/province/kor.jpg"
                  alt="Forest View"
                  className="rounded-lg object-cover"
                  layout="responsive"
                  width={400}
                  height={300}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-md font-semibold">Forest View</h3>
                  <p className="text-xs">Immerse yourself in the lush forest scenery.</p>
                </div>
      
            </Link>
          </div>
          <div className="w-full h-auto relative group">
            <Link href="/destination/another-beach-view">
     
                <Image
                  src="/province/penh.jpg"
                  alt="Another Beach View"
                  className="rounded-lg object-cover"
                  layout="responsive"
                  width={400}
                  height={300}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-md font-semibold">Another Beach View</h3>
                  <p className="text-xs">Another breathtaking beach view.</p>
                </div>
          
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingDestination;
