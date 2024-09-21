import React from 'react';
import '~/styles/layout.css';
import PageWrapper from '../PageWrapper/PageWrapper';

const CardPageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageWrapper>
      <div className=' bg-white px-8 py-12 '>{children}</div>
    </PageWrapper>
  );
};

export default CardPageWrapper;
