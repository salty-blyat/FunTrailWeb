import Image from "next/image";
import Link from "next/link";
import { Card, Typography } from "antd";
import { BentoCard, BentoGrid } from "@/app/components/BentoGrid/BentoGrid";

const { Title, Text } = Typography; 
import { SearchOutlined } from "@ant-design/icons";

const features = [
  {
    Icon: SearchOutlined,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: SearchOutlined,
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: SearchOutlined,
    name: "Multilingual",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: SearchOutlined,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: SearchOutlined,
    name: "Notifications",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

const BentoBox = ({ className = "" }: { className: string }) => {
  return (
    <div className={`rounded-lg container mx-auto ${className}`}>
      {/* Heading */}
      <Title>Trending Destination</Title>
      {/* Description */}
      <Text>
        Angkor Wat, a magnificent temple complex in Cambodia, is renowned for
        its intricate architecture and historical significance. Stunning and
        iconic.
      </Text>

      <BentoGrid className="lg:grid-rows-3">
         <Card>hello</Card>
      </BentoGrid>
    </div>
  );
};

export default BentoBox;
