import SVGIcon from '../SVGIcon/SVGIcon';

const NoContent = ({ title }: { title?: string }) => {
  return (
    <div className='flex flex-col items-center text-center p-4 gap-2'>
      <SVGIcon height='32' width='32' stroke='#1767ce'>
        <path d='M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0' />
      </SVGIcon>
      <div>
        <h3>{title ?? 'Time to start shopping!'}</h3>
        <p>Fill it up with items for your taco</p>
      </div>
    </div>
  );
};

export default NoContent;
