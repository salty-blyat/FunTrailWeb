import { Button } from "antd";
import { Typography } from "antd";
import Link from "next/link";

const { Text } = Typography;

export default function Navbar() {
  return (
    <header className="fixed bg-white w-full p-5 top-0 left-0 z-10 flex justify-between items-center">
      <Link className="text-2xl font-bold hover:opacity-70" href="/">
        Funtrail
      </Link>
      <div className="space-x-2">
        <Button>
          <Link href="/">
            Join Us
          </Link>
        </Button>

        <Button type="primary">
          <Link href="/">Register</Link>
        </Button>
        <Button>
        <Link href="/">Login</Link>
        </Button>
      </div>
    </header>
  );
}
