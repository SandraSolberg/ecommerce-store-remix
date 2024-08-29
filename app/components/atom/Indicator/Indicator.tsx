import SVGIcon from '../SVGIcon/SVGIcon';

type IndicatorType = {
  message: string;
  onDelete: () => void;
};

export const Indicator = ({ message, onDelete }: IndicatorType) => {
  return (
    <div className='flex items-center justify-between py-4'>
      <p>{message}</p>
      <button className='p-1 hover:bg-red-200 rounded-lg' onClick={onDelete}>
        <SVGIcon stroke='#991b1b'>
          <>
            <polyline points='3 6 5 6 21 6'></polyline>
            <path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'></path>
            <line x1='10' y1='11' x2='10' y2='17'></line>
            <line x1='14' y1='11' x2='14' y2='17'></line>
          </>
        </SVGIcon>
      </button>
    </div>
  );
};
