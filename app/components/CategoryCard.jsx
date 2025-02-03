export default function CategoryCard({ image, title, description, showExplore = false }) {
  return (
    <div className="flex flex-col items-center w-[33%] max-sm:w-full">
      <div className={`flex flex-col items-center ${showExplore ? 'mt-14 max-sm:mt-10' : ''}`}>
        <img
          src={image}
          alt={title}
          className="object-cover w-full bg-white rounded-xl h-[400px] max-sm:h-[300px]"
        />
        <div className="mt-3 text-lg font-bold text-center text-stone-900">
          {title}
        </div>
        {description && (
          <div className="mt-3 text-lg font-medium text-center max-w-[352px] text-stone-900 text-opacity-50">
            {description}
          </div>
        )}
        {showExplore && (
          <button 
            className="flex justify-center items-center px-6 py-3 mt-6 bg-white rounded-lg cursor-pointer"
            tabIndex="0"
            aria-label={`Explore ${title}`}
          >
            <span className="text-lg font-medium text-stone-900">Explore</span>
            <i className="ti ti-arrow-right" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}