import { useState } from "react";
import { ChevronRight } from "lucide-react";
import ProductCard from "~/components/Product/product-card";
import { Slider } from "~/components/ui/slider";

const dummyProducts = Array(12)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
  }));

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [openCategory, setOpenCategory] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const productsPerPage = 9;

  const categories = ["T-shirt", "Shorts", "Shirts", "Hoodie"];
  const colors = ["Black", "White", "Red", "Blue", "Green"];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = dummyProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(dummyProducts.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex">
      <div className="ml-6 mt-6 h-full w-1/4 min-w-[295px] rounded-lg border-2 border-gray-300 p-4">
        <h2 className="mb-4 text-xl font-bold">Filters</h2>

        <hr className="my-4" />

        <div className="mb-4">
          <h3 className="mb-2 font-semibold">Categories</h3>
          {categories.map((category) => (
            <div
              key={category}
              className="flex cursor-pointer items-center justify-between py-2"
              onClick={() =>
                setOpenCategory(openCategory === category ? null : category)
              }
            >
              <span>{category}</span>
              <ChevronRight
                className={`transform transition-transform ${
                  openCategory === category ? "rotate-90" : ""
                }`}
              />
            </div>
          ))}
        </div>

        <hr className="my-4" />

        <div className="mb-4">
          <h3 className="mb-2 font-semibold">Price</h3>
          <Slider
            defaultValue={[0, 500]}
            max={500}
            step={10}
            onValueChange={(value) => setPriceRange(value)}
          />
          <div className="mt-2 flex justify-between">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>

        <hr className="my-4" />

        <div className="mb-4">
          <h3 className="mb-2 font-semibold">Colors</h3>
          {colors.map((color) => (
            <div key={color} className="mb-1 flex items-center space-x-2">
              <input type="checkbox" id={color} className="mr-2" />
              <label htmlFor={color}>{color}</label>
            </div>
          ))}
        </div>

        <hr className="my-4" />

        <div className="mb-4">
          <h3 className="mb-2 font-semibold">Sizes</h3>
          {sizes.map((size) => (
            <div key={size} className="mb-1 flex items-center space-x-2">
              <input type="checkbox" id={size} className="mr-2" />
              <label htmlFor={size}>{size}</label>
            </div>
          ))}
        </div>

        <button className="w-full rounded bg-black py-2 text-white">
          Apply Filter
        </button>
      </div>

      <div className="w-3/4 p-4">
        <p className="pb-8 text-3xl font-bold md:text-4xl">Casual</p>

        <div className="mb-6 grid grid-cols-3 gap-4">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} />
          ))}
        </div>

        <div className="flex justify-center space-x-2">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`rounded border px-4 py-2 ${
                currentPage === number
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
