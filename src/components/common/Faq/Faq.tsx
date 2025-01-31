import { Accordion } from '@/components/ui';
import { Container } from '@/components/layout';
import styles from './Faq.module.scss';

interface IProps {
  items: {
    title: string;
    content: string;
  }[];
}

export const Faq: React.FC<IProps> = ({ items }) => {
  return (
    <Container className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>FAQ</h2>

        <Accordion items={items} defaultOpenItems={[0]} />
      </div>
    </Container>
  );
};
