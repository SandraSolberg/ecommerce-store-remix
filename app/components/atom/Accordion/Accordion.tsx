import { useState } from 'react';
import SVGIcon from '../SVGIcon/SVGIcon';
import './accordion.css';

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
      <div className='accordionContainer p-3 flex justify-between items-center'>
        <h2>{title}</h2>
        <SVGIcon>
          <path d={open ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'} />
        </SVGIcon>
      </div>
      {open && <div className='p-3'>{children}</div>}
    </div>
  );
};
