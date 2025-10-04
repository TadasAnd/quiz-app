import Image from "next/image";

interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "ghost";
  iconPath?: string;
}

const Button = ({ children, variant, iconPath }: ButtonProps) => {
  const baseClasses =
    "text-button text-brand-indigo-dark px-6 py-4 rounded-full flex items-center gap-2 flex-1 justify-center uppercase cursor-pointer w-full";
  const variantClasses = {
    secondary: "bg-brand-yellow-dark",
    primary: "bg-brand-yellow",
    ghost: "bg-transparent",
  };
  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`}>
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
    </button>
  );
};

export default Button;
