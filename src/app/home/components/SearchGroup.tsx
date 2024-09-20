import { SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

const SearchGroup = ({ className }: { className: string }) => {
  return (
    <div className={` ${className}`}>
      <Input
        size="large"
        placeholder="Search"
        suffix={
          <Button className="rounded-full w-10 h-10 flex items-center justify-center">
            <SearchOutlined />
          </Button>
        }
      />
    </div>
  );
};

export default SearchGroup;
