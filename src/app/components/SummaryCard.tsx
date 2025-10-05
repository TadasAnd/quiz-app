interface SummaryCardProps {
  title: string;
  value: string;
  gridSpan?: string;
  showBmiScale?: boolean;
}

const SummaryCard = ({
  title,
  value,
  gridSpan,
  showBmiScale = false,
}: SummaryCardProps) => {
  const minBMI = 15;
  const maxBMI = 40;

  const getBMIPositionPercent = (value: number, showBmiScale: boolean) => {
    if (!showBmiScale) return;
    if (showBmiScale) {
      return Math.min(
        100,
        Math.max(0, ((value - minBMI) / (maxBMI - minBMI)) * 100)
      );
    }
    return 0;
  };
  return (
    <div
      className={`bg-brand-indigo-dark ${
        gridSpan ? gridSpan : "col-span-1"
      } flex flex-col items-center w-full justify-around text-white rounded-3xl p-6 gap-2`}
    >
      <p className="text-body-2-semibold uppercase">{title}</p>
      <h2 className={`text-h2 capitalize ${showBmiScale ? "mb-4" : ""}`}>
        {value}
      </h2>
      {showBmiScale && (
        <div className="relative flex flex-col items-center w-full justify-center gap-2">
          <div
            style={{
              left: `${getBMIPositionPercent(Number(value), showBmiScale)}%`,
              transform: "translateX(-50%)",
            }}
            className="absolute -top-1 rounded-full border-2 border-brand-indigo-dark w-2 h-8 bg-white"
          />
          <div className="flex rounded-full w-full">
            <div className="bg-brand-green rounded-s-full w-1/3 h-6"></div>
            <div className="bg-brand-red-light  w-1/3 h-6"></div>
            <div className="bg-brand-red rounded-e-full w-1/3 h-6"></div>
          </div>
          <div className="flex justify-between w-full lg:pt-6">
            <p className="text-body-2-medium">Normal weight</p>
            <p className="text-body-2-medium -ml-8">Overweight</p>
            <p className="text-body-2-medium">Obesity</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SummaryCard;
