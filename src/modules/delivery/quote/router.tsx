import { IQuoteInteractor } from './interactor';
import { Container, Section } from '@/components/layout';
import { Quote } from '@/components/common';
import styles from './index.module.scss';

export interface IProps {
  interactor: IQuoteInteractor;
}

export const QuoteRouter: React.FC<IProps> = ({ interactor }) => {
  return (
    <Section id="quote" className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className="hidden">{interactor.content.title}</h2>

          <Quote align="center" content={interactor.content.quote} className={styles.quote} />
        </div>
      </Container>
    </Section>
  );
};
