export default function ProductDetailsPreview() {
  return (
    <div className="flex flex-col-reverse md:max-w-4xl md:flex-row md:space-x-4">
      <div className="grid grid-cols-3 gap-3 md:w-1/4 md:grid-cols-1">
        <img
          src="/images/product-2.png"
          alt="Thumbnail"
          className="h-auto w-full rounded-3xl object-cover"
        />
        <img
          src="/images/product-2.png"
          alt="Thumbnail"
          className="h-auto w-full rounded-3xl object-cover"
        />
        <img
          src="/images/product-2.png"
          alt="Thumbnail"
          className="h-auto w-full rounded-3xl object-cover"
        />
      </div>

      <div className="mb-4 flex w-full md:mb-0 md:w-3/4">
        <img
          src="/images/product-2.png"
          alt="ProductPreview"
          className="h-full w-full rounded-3xl object-cover"
        />
      </div>
    </div>
  );
}
