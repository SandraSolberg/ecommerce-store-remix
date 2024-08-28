type BasicButtonType = {
  title: string;
  type?: 'submit' | 'reset' | 'button';
  name?: string;
  value?: string | number | readonly string[];
  className?: string;
  onClick?: () => void;
};

const BasicButton = ({
  title = 'Add',
  type = 'button',
  name,
  value,
  className,
  onClick,
}: BasicButtonType) => {
  return (
    <button
      type={type}
      name={name}
      value={value}
      className={` w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default BasicButton;
