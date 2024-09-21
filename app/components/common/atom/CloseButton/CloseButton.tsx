import SVGIcon from '../SVGIcon/SVGIcon';

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
      <SVGIcon>
        <>
          <line x1='18' y1='6' x2='6' y2='18'></line>
          <line x1='6' y1='6' x2='18' y2='18'></line>
        </>
      </SVGIcon>
    </button>
  );
};

export default CloseButton;
