import TicketList from "../(dashboard)/tickets/TicketList";
import Categories from "../components/Categories";
import TestimonialsSection from "../components/TestimonialsSection";
import HeroSection from "../components/HeroSection";
import AboutUsSection from "../components/AboutUsSection"

export default function Home({ user }) {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex overflow-hidden flex-col items-center px-20 pt-6 pb-20 w-full bg-white max-md:px-5 max-md:pb-16 max-md:max-w-full">
        <HeroSection />
        <div className="mt-0 mb-0 w-full max-w-[1250px] max-md:mt-6 max-md:mb-2.5 max-md:max-w-full">
          <TicketList />
        </div>
      </div>
      <Categories />
      <AboutUsSection />
      <TestimonialsSection />
    </div>
  );
}
