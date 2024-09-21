import React from 'react';
import '~/styles/layout.css';

const PageWrapper = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  return (
    <div className='layout px-6 py-8'>
      {title && <h1 className='text-center'>{title}</h1>}
      {children}
    </div>
  );
};

export default PageWrapper;
