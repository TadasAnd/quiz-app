"use client";

interface CheckboxProps {
  title: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const inputBaseClasses =
  "text-body-semibold text-brand-indigo-dark px-[27px] py-4 rounded-full flex items-center gap-2 flex-1 cursor-pointer w-full bg-white";

const Checkbox = ({ title, checked, onChange }: CheckboxProps) => {
  return (
    <label
      className={`${inputBaseClasses} flex items-center outline outline-transparent gap-3 cursor-pointer transition-all w-full hover:outline hover:outline-brand-indigo-light ${
        checked
          ? "border-brand-indigo-dark border"
          : "border-transparent border"
      }`}
    >
      <div className="relative flex items-center justify-center">
        <input
          name={title}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          className="sr-only"
        />

        <div
          className={`w-6 h-6 rounded border-[3px] flex items-center justify-center transition-all
            ${
              checked
                ? "bg-brand-indigo border-brand-indigo"
                : "bg-white border-brand-indigo"
            }`}
        >
          {checked && (
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </div>
      <span>{title}</span>
    </label>
  );
};

export default Checkbox;
