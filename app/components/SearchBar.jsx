export default function SearchBar() {
  return (
    <form className="flex overflow-hidden gap-5 justify-between py-2 pr-2 pl-5 mt-12 max-w-full text-lg font-medium bg-white rounded-xl text-stone-900 text-opacity-50 w-[449px] max-md:mt-10">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        type="text"
        id="search"
        placeholder="What are you looking for?"
        className="my-auto bg-transparent border-none outline-none flex-grow"
      />
      <button type="submit" aria-label="Search">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b94199c55dd801ddbb302b67ae10ad652e51c83a1076facda0f1a5941f2d585f?placeholderIfAbsent=true&apiKey=caa0fab17ad04eae8822654d11ffb6b0"
          alt=""
          className="object-contain shrink-0 w-12 rounded-xl aspect-square"
        />
      </button>
    </form>
  );
}
