import NewsletterForm from "~/components/Newsletter/newsletter-form";

export default function Newsletter() {
  return (
    <div className="md:px-24">
      <div className="mx-4 rounded-2xl bg-black p-6 md:mx-0 md:px-16 ">
        <div className="items-center justify-center md:flex md:gap-[212px]">
          <p className="pb-8 font-integralCF text-3xl text-white md:pb-0 md:text-4xl">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </p>
          <div className="w-full max-w-full md:max-w-[350px]">
            <NewsletterForm />
          </div>
        </div>
      </div>
    </div>
  );
}
