import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from './ui/Card';
import { Button } from 'antd';
import placeholder from '../../../public/province/kompot.webp'
import Image from 'next/image';

const products = [
    {
        id: 1,
        name: "Ohana Phnom Penh Palace Hotel",
        rating: 8.4,
        description: "Situated next to Kandal Market, Ohana Phnom Penh Palace Hotel offers accommodation in the heart of the Riverside area.",
        location: "Daun Penh, Phnom Penh",
        distance: "0.8 km from center",
        image: "path/to/hotel-image.jpg",
    },
    // Add more products as needed
];

const ProductItem = ({ product }) => (
    <div className="p-2 w-full">
        <div className="mx-auto bg-white border border-gray-300 rounded-lg shadow-md flex flex-col md:flex-row p-4 sm:p-6 lg:p-10 w-full max-w-7xl">
            {/* Image Section */}
            <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
                <img 
                    src="https://placehold.co/150x150" 
                    alt="Hotel view with a pool and cityscape in the background" 
                    className="rounded-lg w-full h-auto object-cover"
                />
                <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
                    <i className="fas fa-heart text-gray-500"></i>
                </div>
            </div>
            
            {/* Text Section */}
            <div className="w-full md:w-2/3 md:pl-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-lg sm:text-xl font-bold text-blue-700">{product.name}</h2>
                        <div className="flex items-center rating-stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <i className="fas fa-concierge-bell ml-2 text-yellow-500"></i>
                        </div>
                        <div className="text-xs sm:text-sm text-blue-600 mt-2">
                            <a href="#" className="underline">{product.location}</a> · <a href="#" className="underline">Show on map</a> · {product.distance} from centre
                        </div>
                        <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                        <div className="text-sm text-gray-600">Very good</div>
                        <div className="text-lg sm:text-xl font-bold text-blue-700">{product.rating}</div>
                        <div className="text-sm text-gray-600">2,263 reviews</div>
                        <div className="text-sm text-blue-600 mt-2">Location 9.3</div>
                        <button className="mt-2 bg-blue-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm">Show prices</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const ProductList = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
