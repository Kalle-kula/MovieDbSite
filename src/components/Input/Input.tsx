import { type ChangeEvent } from "react";
import { debounce } from "lodash";
import { TailSpin } from "react-loader-spinner";
export interface IInputProps {
  onValueChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  isLoading?: boolean;
}

const Input = ({
  onValueChange,
  className,
  placeholder,
  isLoading,
}: IInputProps) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    onValueChange(e.target.value);
  };
  const debounceOnChange = debounce(onChange, 300);

  return (
    <div className={`relative w-full ${className ?? ""}`}>
      <input
        type="text"
        className="h-14 w-full p-2 sm:rounded-lg"
        onChange={debounceOnChange}
        placeholder={placeholder}
      />
      <div className="absolute right-4 top-4">
        {isLoading && (
          <TailSpin
            color="#3b3b36"
            height={20}
            width={20}
            wrapperClass="ml-3"
          />
        )}
      </div>
    </div>
  );
};

export default Input;
