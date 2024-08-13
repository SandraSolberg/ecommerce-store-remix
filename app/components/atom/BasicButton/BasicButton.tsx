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
      className={` w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default BasicButton;
