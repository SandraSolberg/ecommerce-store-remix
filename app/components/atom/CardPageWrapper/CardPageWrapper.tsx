import React from 'react';
import '~/styles/layout.css';

const CardPageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='px-6 py-8'>
      <div className='layout bg-white px-8 py-12 '>{children}</div>
    </section>
  );
};

export default CardPageWrapper;
