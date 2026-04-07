type Category = "ALL" | "A" | "B";

type Props = {
  activeCategory: Category;
  onChange: (category: Category) => void;
};

export function CategoryFilter({ activeCategory, onChange }: Props) {
  const categories: Category[] = ["ALL", "A", "B"];

  return (
    <div className="flex gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-3 py-1 rounded border text-sm ${
            activeCategory === cat
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
