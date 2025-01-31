import { ICommunityInteractor } from './interactor';
import { Container, Section } from '@/components/layout';
import { Button } from '@/components/ui';
import styles from './index.module.scss';

export interface IProps {
  interactor: ICommunityInteractor;
}

export const CommunityRouter: React.FC<IProps> = ({ interactor }) => {
  return (
    <Section id="community" className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.titleWrapper}>
              <h2 className={styles.title}>{interactor.content.title}</h2>
              <p className={styles.description}>
                {interactor.content.description.map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </p>
            </div>

            <Button
              component="a"
              href="https://www.youtube.com/@SophiSummers"
              target="_blank"
              fullWidth
            >
              {interactor.content.buttonLabel}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
