import Navbar from "@/app/components/Navbar";
import { FilterSearch } from "@/app/components/FilterSearch";

const SearchPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <FilterSearch />
      </main>
    </>
  );
};

export default SearchPage;
