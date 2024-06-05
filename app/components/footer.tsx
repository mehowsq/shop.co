export default function Footer() {
  return (
    <div className="flex flex-row gap-24 px-4 pt-8 md:bg-[#F0F0F0] md:px-24">
      <div className="flex flex-col">
        <p className="font-integralCF text-3xl">SHOP.CO</p>
        <p className="font-satoshi md-w-[248px] pb-6 pt-5 text-sm font-extralight text-[#00000099] md:pb-10">
          We have clothes that suits your style and which you’re proud to wear.
          From women to men.
        </p>
        <div className="flex flex-row gap-3 pb-6">
          <img src="/images/twitter.svg" alt="" />
          <img src="/images/facebook.svg" alt="" />
          <img src="/images/instagram.svg" alt="" />
          <img src="/images/github.svg" alt="" />
        </div>
      </div>
      <div className="gird-rows-2 grid grid-cols-2 md:grid-cols-4">
        <div className="flex flex-col gap-4">
          <p className="font-satoshi">COMPANY</p>
          <p className="font-satoshi">About</p>
          <p className="font-satoshi">Features</p>
          <p className="font-satoshi">Works</p>
          <p className="font-satoshi">Career</p>
        </div>
        <div className="flex flex-col gap-4">
          <p>HELP</p>
          <p className="font-satoshi">Customer Support</p>
          <p className="font-satoshi">Delivery Details</p>
          <p className="font-satoshi">Terms & Conditions</p>
          <p className="font-satoshi">Privacy Policy</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-satoshi">FAQ</p>
          <p className="font-satoshi">Account</p>
          <p className="font-satoshi">Manage Deliveries</p>
          <p className="font-satoshi">Orders</p>
          <p className="font-satoshi">Payment</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-satoshi">RESOURCES</p>
          <p className="font-satoshi">Free eBook</p>
          <p className="font-satoshi">Development Tutorial</p>
          <p className="font-satoshi">How to - Blog</p>
          <p className="font-satoshi">Youtube Playlist</p>
        </div>
      </div>
    </div>
  );
}
