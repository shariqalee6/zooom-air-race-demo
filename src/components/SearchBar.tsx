type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="w-full max-w-md">
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Search location
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by city, address or country"
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm outline-none transition focus:border-black"
      />
    </div>
  );
}
