import anilabsLogo from './anilabs_logo.png';
import SearchBar from './SearchBar';

export default function HeroSection() {
  return (
    <div className="overflow-hidden px-16 pt-8 mt-6 max-w-full rounded-3xl bg-slate-300 w-[1248px] max-md:px-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full max-md:mt-6 max-md:max-w-full">
            <div className="flex flex-col w-full max-w-lg max-md:max-w-full">
              <div className="text-6xl font-extrabold text-black leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                Welcome to ComCom
              </div>
              <div className="flex gap-10 items-center self-start mt-6 font-medium text-stone-900">
                <div className="flex flex-col self-stretch my-auto">
                  <div className="text-3xl">50+</div>
                  <div className="text-lg">Commission Tickets</div>
                </div>
                <div className="shrink-0 self-stretch my-auto w-0 h-16 border border-solid bg-stone-900 border-stone-900" />
                <div className="flex flex-col self-stretch my-auto whitespace-nowrap">
                  <div className="text-3xl">100+</div>
                  <div className="text-lg">Artists</div>
                </div>
              </div>
            </div>
            <SearchBar />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div
            className="flex flex-col grow items-start px-14 w-full rounded-[200px_200px_0px_200px] max-md:mt-10 max-md:max-w-full"
            style={{
              backgroundImage: `url(${anilabsLogo.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="flex z-10 shrink-0 mt-0 mr-0 h-[500px] max-md:max-w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}