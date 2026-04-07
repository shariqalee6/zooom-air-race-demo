type Category = "ALL" | "A" | "B";

type Props = {
  activeCategory: Category;
  onChange: (category: Category) => void;
};

export function CategoryFilter({ activeCategory, onChange }: Props) {
  const categories: Category[] = ["ALL", "A", "B"];

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Category
      </label>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              activeCategory === cat
                ? "border-black bg-black text-white"
                : "border-gray-300 bg-white text-gray-700 hover:border-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
