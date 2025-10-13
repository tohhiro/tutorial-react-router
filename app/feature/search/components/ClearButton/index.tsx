export const ClearButton = ({
  onClick,
  label = "クリア",
}: {
  onClick: () => void;
  label?: string;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
    >
      {label}
    </button>
  );
};
