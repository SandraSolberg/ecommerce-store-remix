type CloseButtonType = {
  onClick: () => void;
  onHandleKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
};

const CloseButton = ({ onClick, onHandleKeyDown }: CloseButtonType) => {
  return (
    <button
      tabIndex={0}
      onClick={onClick}
      onKeyDown={onHandleKeyDown}
      className='hover:hover:bg-gray-200 rounded-lg h-6 flex items-center gap-1'
    >
      Close
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='var(--color-primary)'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <line x1='18' y1='6' x2='6' y2='18'></line>
        <line x1='6' y1='6' x2='18' y2='18'></line>
      </svg>
    </button>
  );
};

export default CloseButton;
