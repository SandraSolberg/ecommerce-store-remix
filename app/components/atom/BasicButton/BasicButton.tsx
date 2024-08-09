type BasicButtonType = {
  title?: string;
  onClick: () => void;
};

const BasicButton = ({ title = 'Add', onClick }: BasicButtonType) => {
  return (
    <button
      className='mt-4 w-full bg-blue-500 text-white text-sm font-semibold py-2 rounded-lg hover:bg-blue-600 '
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
