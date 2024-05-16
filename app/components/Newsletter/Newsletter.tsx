import NewsletterForm from "~/components/Newsletter/NewsletterForm";

export default function Newsletter() {
  return (
    <div className="mx-4 rounded-2xl bg-black p-6">
      <p className="pb-8 font-integralCF text-3xl text-white">
        STAY UP TO DATE ABOUT OUR LATEST OFFERS
      </p>
      <NewsletterForm />
    </div>
  );
}
