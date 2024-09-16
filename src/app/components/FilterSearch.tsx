import { Checkbox } from "antd";
import Link from "next/link";
import { PlayCircleOutlined } from "@ant-design/icons";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./Accordion";

export function FilterSearch() {
  return (
    <div className="mx-auto container flex justify-center gap-10">
      <div className="flex flex-col min-w-60 gap-4 items-start py-2">
        <div className="text-lg font-semibold">Filter</div>
        <div className="text-lg font-semibold">Filter</div>
        <div className="mb-4 w-full max-w-xs">
          <input
            type="text"
            placeholder="Search"
            className="p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="type">
            <AccordionTrigger className="text-base">Type</AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-2">
                <h1 className="flex items-center gap-2 font-normal">
                  <Checkbox id="type-restaurant" /> Restaurant
                </h1>
                <h1 className="flex items-center gap-2 font-normal">
                  <Checkbox id="type-hotel" /> Hotel
                </h1>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="price">
            <AccordionTrigger className="text-base">Price Range</AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-2">
                <h1 className="flex items-center gap-2 font-normal">
                  <Checkbox id="price-low" /> $0 - $50
                </h1>
                <h1 className="flex items-center gap-2 font-normal">
                  <Checkbox id="price-medium" /> $50 - $150
                </h1>
                <h1 className="flex items-center gap-2 font-normal">
                  <Checkbox id="price-high" /> $150+
                </h1>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="rating">
            <AccordionTrigger className="text-base">Rating</AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-2">
                <h1 className="flex items-center gap-2 font-normal">
                  <Checkbox id="rating-4" /> 4 stars and above
                </h1>
                <h1 className="flex items-center gap-2 font-normal">
                  <Checkbox id="rating-3" /> 3 stars and above
                </h1>
                <h1 className="flex items-center gap-2 font-normal">
                  <Checkbox id="rating-2" /> 2 stars and above
                </h1>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="amenities">
            <AccordionTrigger className="text-base">Amenities</AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-2">
                <h1 className="flex items-center gap-2 font-normal">
                  <Checkbox id="amenity-wifi" /> Wifi
                </h1>
                <h1 className="flex items-center gap-2 font-normal">
                  <Checkbox id="amenity-parking" /> Parking
                </h1>
                <h1 className="flex items-center gap-2 font-normal">
                  <Checkbox id="amenity-pool" /> Pool
                </h1>
                <h1 className="flex items-center gap-2 font-normal">
                  <Checkbox id="amenity-gym" /> Gym
                </h1>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
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
                className="object-cover w-full h-96"
              />
              <div className="absolute inset-0 bg-black/70 group-hover:opacity-90 transition-opacity text-white p-4 flex flex-col justify-end gap-2">
                <h3 className="font-semibold tracking-tight">Listing Name</h3>
                <small className="text-sm leading-none">Type</small>
                <div className="flex items-center gap-2">
                  <PlayCircleOutlined className="w-4 h-4 fill-primary" />
                  <span className="font-semibold">4.8</span>
                  <span className="text-sm text-muted-foreground">
                    (120 reviews)
                  </span>
                </div>
                <div className="font-semibold">$50 - $100</div>
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD







=======
>>>>>>> 5dfc6a50e3d14ae460f8f952a2552651224cd049
      </div>
    </div>
  );
} 
