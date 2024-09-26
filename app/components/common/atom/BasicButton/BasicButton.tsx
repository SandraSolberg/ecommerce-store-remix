import Spinner from '../Spinner/Spinner';

interface IBasicButton {
  btnTitle: string | JSX.Element;
  type?: 'submit' | 'reset' | 'button';
  name?: string;
  value?: string | number | readonly string[];
  className?: string;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

const BasicButton = ({
  btnTitle = 'Add',
  type = 'button',
  name,
  value,
  className,
  onClick,
  isLoading,
  disabled = false,
}: IBasicButton) => {
  return (
    <button
      type={type}
      name={name}
      value={value}
      className={`w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 flex justify-center items-center gap-2 ${className} disabled:bg-blue-300`}
      onClick={onClick}
      disabled={disabled}
    >
      {isLoading && <Spinner />}
      {btnTitle}
    </button>
  );
};

export default BasicButton;
