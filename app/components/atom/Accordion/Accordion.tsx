import { useState } from 'react';

type AccordionType = {
  title: string;
  children: React.ReactNode;
  noBorderTop?: boolean;
};

export const Accordion = ({
  title,
  children,
  noBorderTop = false,
}: AccordionType) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      role='button'
      tabIndex={0}
      onClick={handleOpen}
      className={`border-b border-border-divider ${
        noBorderTop ? '' : 'border-t border-border-divider'
      }`}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleOpen();
        }
      }}
    >
      <div className='p-3 flex justify-between items-center hover:bg-gray-200'>
        <h2>{title}</h2>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#061629'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d={open ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'} />
        </svg>
      </div>
      {open && <div className='p-3'>{children}</div>}
    </div>
  );
};
