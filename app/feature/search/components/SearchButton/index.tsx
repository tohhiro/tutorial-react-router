export const SearchButton = ({ label = "検索" }: { label?: string }) => {
  return (
    <button
      type="submit"
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {label}
    </button>
  );
};
