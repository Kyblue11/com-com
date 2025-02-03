import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    text: "ComCom changed my life! Now I spend all my money on commissions and have no regrets. Who needs savings anyway?",
    name: "Aaron",
    role: "Artist",
    rating: 4.5,
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a88cec626c39576f2a8bc3f95ec067acca53af1ae0d5e419a20d3ce2c061b79?placeholderIfAbsent=true&apiKey=caa0fab17ad04eae8822654d11ffb6b0"
  },
  {
    text: "Thanks to ComCom, I now have more art than wall space. My house looks like an art gallery, and I love it! I have been loosing so much money donating to these commission artirsts who end up using chatgpt for my RM456 art, but its all worth it coz supporting small business is kinda my thing :D",
    name: "Vincent",
    role: "Orphan",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d1f854c80788176271e98249854707826e850d70cb7fa53064f3bf9f2706432?placeholderIfAbsent=true&apiKey=caa0fab17ad04eae8822654d11ffb6b0"
  }
];

export default function TestimonialsSection() {
  return (
    <div className="flex overflow-hidden flex-col pt-0 pb-56 pl-20 w-full bg-white max-md:pb-24 max-md:pl-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between self-center w-full max-w-[1248px] max-md:max-w-full">
        <div className="text-3xl font-bold text-black max-md:max-w-full">
          What customers say about ComCom?
        </div>
        <div className="flex gap-1.5 items-start self-start mt-3">
          <div className="flex shrink-0 w-12 h-1.5 rounded-xl bg-slate-300" />
          <div className="flex shrink-0 w-3 h-1.5 rounded-xl bg-zinc-300" />
          <div className="flex shrink-0 w-3 h-1.5 rounded-xl bg-zinc-300" />
        </div>
      </div>
      <div className="self-start mt-12 mb-0 max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
            <TestimonialCard {...testimonials[0]} />
          </div>
          <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
            <TestimonialCard {...testimonials[1]} />
          </div>
        </div>
      </div>
    </div>
  );
}