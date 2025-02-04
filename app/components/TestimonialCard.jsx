export default function TestimonialCard({ text, name, role, rating, imageSrc }) {
  return (
    <div className="flex overflow-hidden flex-col pt-12 pr-12 pl-3.5 mx-auto w-full rounded-xl bg-slate-300 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
      <div className="ml-9 text-lg font-medium text-stone-900 text-opacity-80 max-md:max-w-full">
        {text}
      </div>
      <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
        <div className="flex gap-2">
          <img
            loading="lazy"
            src={imageSrc}
            alt={`Profile picture of ${name}`}
            className="object-contain shrink-0 max-w-full aspect-[0.74] w-[150px]"
          />
          <div className="flex flex-col my-auto">
            <div className="text-lg font-bold text-stone-900">{name}</div>
            <div className="text-xs font-medium text-stone-900 text-opacity-50">
              {role}
            </div>
          </div>
        </div>
        {rating && (
          <div className="flex gap-3 items-center my-auto text-lg font-bold whitespace-nowrap text-stone-900">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b80db85e72c28d15bee33ed7dc96baf846c59719b09281367db5082260801a77?placeholderIfAbsent=true&apiKey=caa0fab17ad04eae8822654d11ffb6b0"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            />
            <div className="self-stretch my-auto">{rating}</div>
          </div>
        )}
      </div>
    </div>
  );
}