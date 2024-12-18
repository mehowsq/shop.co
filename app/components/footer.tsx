import Newsletter from "./Newsletter/Newsletter";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <>
      <Newsletter />
      <div className="relative md:bg-[#F0F0F0] md:px-24">
        <div className="pt-20 md:pt-32">
          <div className="px-4 md:px-0">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-24">
              <div className="flex flex-col md:col-span-1">
                <p className="font-integralCF text-3xl">SHOP.CO</p>
                <p className="pb-6 pt-5 text-sm font-extralight text-[#00000099] md:pb-10">
                  We have clothes that suits your style and which you're proud
                  to wear. From women to men.
                </p>
                <div className="flex flex-row gap-3 pb-6">
                  <img src="/images/twitter.svg" alt="Twitter" />
                  <img src="/images/facebook.svg" alt="Facebook" />
                  <img src="/images/instagram.svg" alt="Instagram" />
                  <img src="/images/github.svg" alt="GitHub" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8 md:col-span-4 md:grid-cols-4">
                <div className="flex flex-col gap-4">
                  <p>COMPANY</p>
                  <p>About</p>
                  <p>Features</p>
                  <p>Works</p>
                  <p>Career</p>
                </div>
                <div className="flex flex-col gap-4">
                  <p>HELP</p>
                  <p>Customer Support</p>
                  <p>Delivery Details</p>
                  <p>Terms & Conditions</p>
                  <p>Privacy Policy</p>
                </div>
                <div className="flex flex-col gap-4">
                  <p>FAQ</p>
                  <p>Account</p>
                  <p>Manage Deliveries</p>
                  <p>Orders</p>
                  <p>Payment</p>
                </div>
                <div className="flex flex-col gap-4">
                  <p>RESOURCES</p>
                  <p>Free eBook</p>
                  <p>Development Tutorial</p>
                  <p>How to - Blog</p>
                  <p>Youtube Playlist</p>
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-10" />
          <div className="flex justify-between pb-[88px]">
            <p className="text-[#00000099]">
              Shop.co © 2000-2023, All Rights Reserved
            </p>
            <div className="flex flex-row">
              <img src="/images/visa-icon.svg"></img>
              <img src="/images/mastercard-icon.svg"></img>
              <img src="/images/paypal-icon.svg"></img>
              <img src="/images/applepay-icon.svg"></img>
              <img src="/images/googlepay-icon.svg"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
