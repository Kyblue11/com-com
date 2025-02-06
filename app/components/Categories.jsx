import CategoryCard from "./CategoryCard";
import genshin_category from "./genshin_category.jpeg";
import aot_category from "./aot_category.jpeg";
import hatsunaMiku_category from "./hatsunaMiku_category.jpeg";

const categoryData = [
  {
    image: genshin_category,
    title: "Genshin Impact",
  },
  {
    image: aot_category,
    title: "Attack on Titan",
    description: "Characters like Eren, Mikasa and full-scale drawings of Shiganshina.",
    showExplore: true
  },
  {
    image: hatsunaMiku_category,
    title: "Hatsuna Miku and co.",
  }
];

export default function Categories() {
  return (
    <div className="flex overflow-hidden flex-col pb-20 w-full bg-white">
      <div className="flex flex-col items-center self-center px-5 pt-0 pb-0 w-full max-w-[1440px]">
        <h1 className="text-3xl font-bold text-center text-stone-900">
          Categories
        </h1>
        <p className="mt-3 text-lg font-medium text-center text-stone-900 text-opacity-50">
          Check out our preferred commission categories!
        </p>
      </div>
      <div className="px-20 py-10 mt-12 w-full bg-slate-300 max-md:p-10 max-sm:p-5">
        <div className="flex gap-5 mx-auto my-0 max-w-[1440px] max-md:gap-4 max-sm:flex-col max-sm:gap-10">
          {categoryData.map((category, index) => (
            <CategoryCard
              key={index}
              image={category.image.src}
              title={category.title}
              description={category.description}
              showExplore={category.showExplore}
            />
          ))}
        </div>
      </div>
    </div>
  );
}