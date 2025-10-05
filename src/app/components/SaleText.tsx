interface SaleTextProps {
  title: string;
  discount: string;
}

const SaleText = ({ title, discount }: SaleTextProps) => {
  return (
    <div className="flex items-center gap-1">
      <p className="text-body-2-semibold uppercase ml-1">{title}</p>
      <p className="text-body-2-regular">up to</p>
      <p className="text-body-2-semibold uppercase">{discount} off!</p>
    </div>
  );
};

export default SaleText;
