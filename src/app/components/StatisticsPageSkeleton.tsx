import Logo from "./shared/Logo";

const StatisticsPageSkeleton = () => {
  return (
    <div className="flex flex-col items-center size-full min-h-screen p-4">
      <div className="flex items-center justify-center w-full p-4 mb-8 z-10">
        <Logo width={126} height={40} />
      </div>
      <h1 className="text-h2 text-brand-indigo-dark text-center px-6">
        Your personal summary
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-sm lg:max-w-6xl z-10 py-4">
        {/* Large BMI Card - spans 2 cols and 2 rows */}
        <div className="col-span-2 row-span-2 bg-brand-indigo-dark/80 rounded-3xl p-6 animate-pulse">
          <div className="h-4 bg-brand-indigo-light rounded w-1/2 mb-4"></div>
          <div className="h-10 bg-brand-indigo-light rounded w-3/4 mb-4"></div>
          <div className="h-10 bg-brand-indigo-light rounded w-full"></div>
        </div>

        {/* Small cards */}
        {["Age", "Gender", "Height cm", "Weight kg"].map((title) => (
          <div
            key={title}
            className="bg-brand-indigo-dark/80 rounded-3xl p-6 animate-pulse flex flex-col gap-2"
          >
            <div className="h-4 bg-brand-indigo-light rounded w-2/3"></div>
            <div className="h-8 bg-brand-indigo-light rounded w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsPageSkeleton;
