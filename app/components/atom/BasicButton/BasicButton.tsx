type BasicButtonType = {
  title?: string;
  className?: string;
  onClick: () => void;
};

const BasicButton = ({
  title = 'Add',
  className,
  onClick,
}: BasicButtonType) => {
  return (
    <button
      className={`mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 ${className}`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
    >
      {title}
    </button>
  );
};

export default BasicButton;
