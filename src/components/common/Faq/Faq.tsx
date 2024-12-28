import { Accordion } from '@/components/ui';
import styles from './Faq.module.scss';
import { Container } from '@/components/layout';

type FaqProps = {
  items: { title: string; content: string }[];
};

export const Faq: React.FC<FaqProps> = ({ items }) => {
  return (
    <Container className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>FAQ</h2>

        <Accordion items={items} defaultOpenItems={[0]} />
      </div>
    </Container>
  );
};
