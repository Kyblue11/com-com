import { getTickets } from '../services/tickets';
import ProductCard from '../../components/ProductCard';
import Link from 'next/link';

export default async function TicketList() {
  const tickets = await getTickets();

  return (
    <div className="mt-24 mb-0 w-full max-w-[1250px] max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="grow max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col w-full">
              <div className="flex flex-col w-64 max-w-full">
                <h1 className="text-3xl font-bold text-stone-900">
                  Commission Tickets
                </h1>
                <p className="mt-3 text-lg font-medium text-stone-900 text-opacity-50">
                  Explore our collection of commission tickets by talented artists.
                </p>
              </div>
              <Link href="/tickets">
                <button 
                  className="flex gap-2.5 items-center self-start px-6 py-3 mt-6 text-lg font-medium rounded-lg bg-slate-300 text-stone-900 max-md:px-5"
                  aria-label="See more tickets"
                >
                  <span className="self-stretch my-auto">See more</span>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c037047510b6bf2e65eb6bc15b379339490b38340175df263ec593d02633ef31?placeholderIfAbsent=true&apiKey=caa0fab17ad04eae8822654d11ffb6b0"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-[1.2]"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-11/12 max-md:ml-0 max-md:w-full">
          <div className="grow max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              {tickets.slice(0, 3).map((ticket, index) => (
                <div key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <ProductCard ticket={ticket} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}