const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div
        className="
                    animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 border-opacity-75
                "
      ></div>

      <p className="ml-4 text-xl font-semibold text-gray-700">Loading...</p>
    </div>
  );
};

export default Loading;
