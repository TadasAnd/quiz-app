interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  unit: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  extraClass?: string;
}

const Input = ({
  placeholder,
  unit,
  value,
  onChange,
  name,
  extraClass,
  ...rest
}: InputProps) => {
  return (
    <div
      className={`relative w-full bg-white rounded-full px-6 py-4 ${extraClass}`}
    >
      <input
        id={name + unit}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent border-0 outline-none focus:outline-none focus:border-0 focus:ring-0 text-body-regular text-brand-indigo-dark placeholder:text-brand-indigo-light"
        autoComplete="off"
        style={{
          border: "none",
          outline: "none",
          boxShadow: "none",
        }}
        {...rest}
      />
      <span className="absolute right-6 top-1/2 -translate-y-1/2 text-body-semibold text-brand-indigo-dark pointer-events-none">
        {unit}
      </span>
    </div>
  );
};

export default Input;
