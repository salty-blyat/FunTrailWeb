import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion';
import { Checkbox } from 'antd';

const FilterSection = () => {
    return (
        <div className="flex flex-col min-w-30 gap-4 items-start py-2">
            <div className="text-lg font-semibold">Filter</div>
            <div className="mb-4 w-full max-w-xs">
                <input
                    type="text"
                    placeholder="Search"
                    className="p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
            {/* Accordion for Filters */}
            <Accordion className="w-full">
                {/* Filter by Type */}
                <AccordionItem value="type">
                    <AccordionTrigger className="text-base">Type</AccordionTrigger>
                    <AccordionContent>
                        <div className="grid gap-2">
                            <div className="flex items-center gap-2">
                                <Checkbox id="type-restaurant">Restaurant</Checkbox>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="type-hotel">Hotel</Checkbox>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* Filter by Price */}
                <AccordionItem value="price">
                    <AccordionTrigger className="text-base">Price Range</AccordionTrigger>
                    <AccordionContent>
                        <div className="grid gap-2">
                            <div className="flex items-center gap-2">
                                <Checkbox id="price-low">$0 - $50</Checkbox>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="price-medium">$50 - $150</Checkbox>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="price-high">$150+</Checkbox>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* Filter by Rating */}
                <AccordionItem value="rating">
                    <AccordionTrigger className="text-base">Rating</AccordionTrigger>
                    <AccordionContent>
                        <div className="grid gap-2">
                            <div className="flex items-center gap-2">
                                <Checkbox id="rating-4">4 stars and above</Checkbox>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="rating-3">3 stars and above</Checkbox>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="rating-2">2 stars and above</Checkbox>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* Filter by Amenities */}
                <AccordionItem value="amenities">
                    <AccordionTrigger className="text-base">Amenities</AccordionTrigger>
                    <AccordionContent>
                        <div className="grid gap-2">
                            <div className="flex items-center gap-2">
                                <Checkbox id="amenity-wifi">Wifi</Checkbox>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="amenity-parking">Parking</Checkbox>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="amenity-pool">Pool</Checkbox>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="amenity-gym">Gym</Checkbox>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default FilterSection;
