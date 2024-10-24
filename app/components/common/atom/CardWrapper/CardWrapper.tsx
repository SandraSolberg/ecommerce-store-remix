import { Link } from '@remix-run/react';
import React from 'react';

type CardWrapperProps = {
  link: string;
  children: React.ReactNode;
  className?: string;
};

const CardWrapper = ({ link, children, className }: CardWrapperProps) => {
  return (
    <Link to={link} className='hover:no-underline'>
      <article
        className={`w-48 min-h-[24.8rem]  bg-white m-2 p-2 rounded-lg flex flex-col justify-between shadow hover:shadow-lg ${className}`}
      >
        {children}
      </article>
    </Link>
  );
};

export default CardWrapper;
