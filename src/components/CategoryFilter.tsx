import { EventFilterCategory } from "../lib/types";

type Props = {
  activeCategory: EventFilterCategory;
  onChange: (category: EventFilterCategory) => void;
};

export function CategoryFilter({ activeCategory, onChange }: Props) {
  const categories: Array<{
    label: string;
    value: EventFilterCategory;
  }> = [
    { label: "All", value: "ALL" },
    { label: "Championship", value: "Championship" },
    { label: "Challenger", value: "Challenger" },
  ];

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Category
      </label>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.value}
            type="button"
            aria-pressed={activeCategory === category.value}
            onClick={() => onChange(category.value)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              activeCategory === category.value
                ? "border-black bg-black text-white"
                : "border-gray-300 bg-white text-gray-700 hover:border-black"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}
