interface IBasicButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnTitle: string | JSX.Element;
  type?: 'submit' | 'reset' | 'button';
  name?: string;
  value?: string | number | readonly string[];
  className?: string;
  onClick?: () => void;
}

const BasicButton = ({
  btnTitle = 'Add',
  type = 'button',
  name,
  value,
  className,
  onClick,
  ...rest
}: IBasicButton) => {
  return (
    <button
      type={type}
      name={name}
      value={value}
      className={`w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 ${className}`}
      onClick={onClick}
      {...rest}
    >
      {btnTitle}
    </button>
  );
};

export default BasicButton;
