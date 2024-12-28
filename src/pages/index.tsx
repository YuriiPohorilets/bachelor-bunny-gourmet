import Head from 'next/head';
import { useState } from 'react';

import { Section } from '@/components/layout';
import { Faq } from '@/components/common';
import { faq } from '@/constants/faq';

const HomePage = () => {
  return (
    <div style={{ paddingTop: 120 }}>
      <Section id="FAQ">
        <Faq items={faq} />
      </Section>
    </div>
  );
};

export default HomePage;
