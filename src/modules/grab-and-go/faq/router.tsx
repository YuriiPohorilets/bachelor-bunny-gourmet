import { IFaqInteractor } from './interactor';
import { Container, Section } from '@/components/layout';
import { Accordion } from '@/components/ui';
import { Quote } from '@/components/common';
import styles from './index.module.scss';

export interface IProps {
  interactor: IFaqInteractor;
}

export const FaqRouter: React.FC<IProps> = ({ interactor }) => {
  return (
    <Section id="faq" className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <Quote align="center" content={interactor.content.quote} className={styles.quote} />

          <div className={styles.content}>
            <h2 className={styles.title}>{interactor.content.title}</h2>

            <Accordion defaultOpenItems={[0]} items={interactor.content.faq} />
          </div>
        </div>
      </Container>
    </Section>
  );
};
