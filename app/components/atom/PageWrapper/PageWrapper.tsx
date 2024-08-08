import React from 'react';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='p-4'>
      <div className='layout bg-white '>{children}</div>
    </section>
  );
};

export default PageWrapper;
