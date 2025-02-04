export default function AboutUsSection() {
  return (
    <div className="flex overflow-hidden flex-col items-center px-20 pt-10 pb-40 bg-white max-md:px-10 max-md:py-8 max-sm:px-5 max-sm:py-5">
      <div className="flex flex-col items-center w-full max-w-screen-xl">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-stone-900 max-sm:text-3xl">
            About us
          </h2>
          <p className="text-lg font-medium text-stone-900 text-opacity-50 max-sm:text-base">
            Order now and appreciate the beauty of indie art!
          </p>
        </div>
        <div className="flex gap-6 justify-center w-full max-md:flex-wrap max-md:gap-10 max-md:justify-center max-sm:flex-col">
          <div className="flex flex-col items-center p-5 text-center w-[400px] max-md:min-w-[300px] max-md:w-[45%] max-sm:w-full max-sm:min-w-0">
            <div className="flex justify-center items-center mb-6 w-20 h-20 rounded-full bg-slate-200 max-sm:h-[60px] max-sm:w-[60px]">
              <i
                className="ti ti-plant-2 text-3xl text-stone-900 max-sm:text-2xl"
                aria-hidden="true"
              />
            </div>
            <h3 className="mb-3 text-lg font-bold text-black max-sm:text-base">
              Authenticity
            </h3>
            <p className="text-base font-medium leading-normal text-stone-900 text-opacity-50 max-sm:text-sm">
              we offer many different types of unique commission art with our partners.
            </p>
          </div>
          <div className="flex flex-col items-center p-5 text-center w-[400px] max-md:min-w-[300px] max-md:w-[45%] max-sm:w-full max-sm:min-w-0">
            <div className="flex justify-center items-center mb-6 w-20 h-20 rounded-full bg-slate-200 max-sm:h-[60px] max-sm:w-[60px]">
              <i
                className="ti ti-box text-3xl text-stone-900 max-sm:text-2xl"
                aria-hidden="true"
              />
            </div>
            <h3 className="mb-3 text-lg font-bold text-black max-sm:text-base">
              Fast & Free Shipping
            </h3>
            <p className="text-base font-medium leading-normal text-stone-900 text-opacity-50 max-sm:text-sm">
              4-day or less delivery time, free shipping and an expedited
              delivery option.
            </p>
          </div>
          <div className="flex flex-col items-center p-5 text-center w-[400px] max-md:min-w-[300px] max-md:w-[45%] max-sm:w-full max-sm:min-w-0">
            <div className="flex justify-center items-center mb-6 w-20 h-20 rounded-full bg-slate-200 max-sm:h-[60px] max-sm:w-[60px]">
              <i
                className="ti ti-phone text-3xl text-stone-900 max-sm:text-2xl"
                aria-hidden="true"
              />
            </div>
            <h3 className="mb-3 text-lg font-bold text-black max-sm:text-base">
              24/7 Support
            </h3>
            <p className="text-base font-medium leading-normal text-stone-900 text-opacity-50 max-sm:text-sm">
              answers to any business related inquiry 24/7 and in real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}