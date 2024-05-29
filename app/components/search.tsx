import { SearchInput } from "~/components/ui/search-input";

function SearchBar() {
  return (
    <div className="md:inline md:w-1/3 lg:w-1/3 xl:w-[577px] hidden w-full">
      <SearchInput
        placeholder="Search for products..."
        className="w-full font-satoshiLight text-[#00000066]"
      />
    </div>
  );
}

export default SearchBar;
