export default function Footer() {
  return (
    <footer className="flex overflow-hidden flex-col px-20 py-12 w-full bg-slate-300 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between self-center w-full max-w-[1248px] max-md:max-w-full">
        <div className="flex flex-col items-center">
          <div className="flex flex-col max-w-full text-lg w-[189px]">
            <div className="text-black">Com Com</div>
            <div className="mt-7 font-medium text-stone-900 text-opacity-50">
              We build a community of artists with deep passion for anime
            </div>
          </div>
          <div className="flex gap-6 items-center mt-6">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e9587f8f3121514cbccb5f5ae8fe0da06609fc2ea59a035d4280cac22d58cd4?placeholderIfAbsent=true&apiKey=caa0fab17ad04eae8822654d11ffb6b0"
              alt="Social media icon 1"
              className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/45bf739d33aa6e66d3ac4d435760a5208b27bbaae15486277457a82f15698f7b?placeholderIfAbsent=true&apiKey=caa0fab17ad04eae8822654d11ffb6b0"
              alt="Social media icon 2"
              className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square"
            />
          </div>
        </div>
        <div className="flex gap-10 items-start text-lg text-stone-900 text-opacity-50">
          <div className="flex flex-col whitespace-nowrap">
            <div className="font-bold text-stone-900">Information</div>
            <div className="mt-6">About</div>
            <div className="mt-6">Product</div>
            <div className="mt-6">Blog</div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-stone-900">Company</div>
            <div className="mt-6">Community</div>
            <div className="mt-6">Career</div>
            <div className="mt-6">Our story</div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-stone-900">Contact</div>
            <div className="mt-6">Getting Started</div>
            <div className="mt-6">Pricing</div>
            <div className="mt-6">Resources</div>
          </div>
        </div>
      </div>
      <div className="self-start mt-24 text-lg font-medium text-stone-900 text-opacity-30 max-md:mt-10 max-md:max-w-full">
        2025* all Right Reserved Term of use Com Com 
      </div>
    </footer>
  );
}