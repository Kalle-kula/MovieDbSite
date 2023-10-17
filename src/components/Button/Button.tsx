import { TailSpin } from "react-loader-spinner";
import { twMerge } from "tailwind-merge";

export interface IButtonProps {
  text: string;
  onClick: () => void;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  isLoading?: boolean;
}
const Button = ({ text, onClick, type, disabled, isLoading }: IButtonProps) => {
  return (
    <button
      type={type}
      className={twMerge(
        "flex h-14 cursor-pointer items-center justify-center border border-black bg-gray-300 px-10 py-2 hover:bg-gray-100 sm:rounded-lg",
        disabled ? "cursor-not-allowed border-opacity-30" : "",
      )}
      disabled={disabled}
      onClick={onClick}
    >
      <div className="flex">
        <p className={`${disabled ? "opacity-30" : "opacity-100"}`}>{text}</p>
        {isLoading && (
          <TailSpin
            color="#3b3b36"
            height={20}
            width={20}
            wrapperClass="ml-3"
          />
        )}
      </div>
    </button>
  );
};

export default Button;
