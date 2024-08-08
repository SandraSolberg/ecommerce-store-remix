import React from 'react';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='p-4'>
      <div className='layout bg-white px-8 py-12 '>{children}</div>
    </section>
  );
};

export default PageWrapper;
