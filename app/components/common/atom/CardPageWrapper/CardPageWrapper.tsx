import React from 'react';
import PageWrapper from '../PageWrapper/PageWrapper';
import '~/styles/layout.css';

const CardPageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageWrapper>
      <section className=' bg-white p-10 min-h-48'>{children}</section>
    </PageWrapper>
  );
};

export default CardPageWrapper;
