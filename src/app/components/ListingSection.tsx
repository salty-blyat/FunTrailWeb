import React from 'react';
import { PlayCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';

const ListingSection = () => {
    return (
        <div className="grid gap-6 w-full">
            <div className="flex flex-col gap-4">
                <div className="relative group rounded-lg overflow-hidden">
                    <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                        <span className="sr-only">View</span>
                    </Link>
                    <div className="flex flex-col gap-2">
                        <img
                            src="/placeholder.svg"
                            alt="Listing image"
                            className="object-cover w-full h-96" />
                        <div className="absolute inset-0 bg-black/70 group-hover:opacity-90 transition-opacity text-white p-4 flex flex-col justify-end gap-2">
                            <h3 className="font-semibold tracking-tight">Listing Name</h3>
                            <small className="text-sm leading-none">Type</small>
                            <div className="flex items-center gap-2">
                                <PlayCircleOutlined className="w-4 h-4 text-primary" />
                                <span className="font-semibold">4.8</span>
                                <span className="text-sm text-gray-400">(120 reviews)</span>
                            </div>
                            <div className="font-semibold">$50 - $100</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingSection;
