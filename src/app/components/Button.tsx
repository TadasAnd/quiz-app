import Image from "next/image";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "ghost" | "selection";
  showArrow?: boolean;
  iconPath?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  variant,
  iconPath,
  showArrow = false,
  onClick,
  ...rest
}: ButtonProps) => {
  const baseClasses =
    "text-button disabled:opacity-50 border border-transparent disabled:cursor-not-allowed text-brand-indigo-dark px-6 py-4 rounded-full flex items-center gap-2 flex-1 cursor-pointer w-full";
  const variantClasses = {
    secondary: "bg-brand-yellow-dark justify-center uppercase",
    primary: "bg-brand-yellow justify-center uppercase",
    ghost: "bg-transparent justify-center uppercase",
    selection: "bg-white justify-between",
  };
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
      {...rest}
    >
      {iconPath && (
        <Image
          src={iconPath}
          alt="icon"
          width={24}
          height={24}
          role="presentation"
        />
      )}
      {children}
      {showArrow && (
        <Image
          src="/images/icons/arrow.svg"
          alt="arrow"
          width={20}
          height={20}
          role="presentation"
        />
      )}
    </button>
  );
};

export default Button;
