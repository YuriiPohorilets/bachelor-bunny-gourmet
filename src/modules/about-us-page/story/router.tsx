import { Paragraph } from '@/components/ui';
import styles from './index.module.scss';

import { IStoryInteractor } from './interactor';
import { Container, Section } from '@/components/layout';

export interface IProps {
  interactor: IStoryInteractor;
}

export const StoryRouter: React.FC<IProps> = ({ interactor }) => {
  return (
    <Section id="story" className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>{interactor.content.title}</h2>

          <Paragraph className={styles.description}>
            {interactor.content.description.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </Paragraph>
          {/* <p className={styles.description}>
            {interactor.content.description.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </p> */}

          <span className={styles.label}>{interactor.content.label}</span>
        </div>
      </Container>
    </Section>
  );
};
