import React from 'react';
import '~/styles/layout.css';

const PageWrapper = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className='layout p-4'>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default PageWrapper;
