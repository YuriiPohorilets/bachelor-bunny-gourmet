import { Accordion } from '@/components/ui';
import Head from 'next/head';

const HomePage = () => {
  return (
    <div style={{ paddingTop: 120 }}>
      <h1>Hello!</h1>
      <Accordion title="one" content="Hello world" />
      <Accordion title="two" content="Hello world" />
      <Accordion title="three" content="Hello world" />
      <Accordion title="four" content="Hello world" />
    </div>
  );
};

export default HomePage;
