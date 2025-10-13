export const InputKeyword = ({
  keyword,
  onChange,
  placeholder = "Enter keyword",
}: {
  keyword: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}) => {
  return (
    <input
      type="text"
      value={keyword}
      onChange={onChange}
      placeholder={placeholder}
      aria-label="Search"
      autoFocus
      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};
