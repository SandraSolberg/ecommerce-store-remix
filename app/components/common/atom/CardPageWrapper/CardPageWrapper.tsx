import React from 'react';
import PageWrapper from '../PageWrapper/PageWrapper';
import '~/styles/layout.css';

const CardPageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageWrapper>
      <section className=' bg-white px-8 py-12 '>{children}</section>
    </PageWrapper>
  );
};

export default CardPageWrapper;
