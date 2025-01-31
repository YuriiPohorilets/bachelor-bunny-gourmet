import { IAboutInteractor } from './interactor';
import { Container, Section } from '@/components/layout';
import styles from './index.module.scss';
import { Button } from '@/components/ui';

export interface IProps {
  interactor: IAboutInteractor;
}

export const AboutRouter: React.FC<IProps> = ({ interactor }) => {
  return (
    <Section id="about" className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h2 className="hidden">{interactor.content.title}</h2>

            <p className={styles.description}>{interactor.content.description}</p>

            <Button fullWidth>{interactor.content.buttonLabel}</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
