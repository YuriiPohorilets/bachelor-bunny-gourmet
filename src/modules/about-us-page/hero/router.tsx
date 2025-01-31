import { IHeroInteractor } from './interactor';
import { Container, Section } from '@/components/layout';
import { Button } from '@/components/ui';
import styles from './index.module.scss';

export interface IProps {
  interactor: IHeroInteractor;
}

export const HeroRouter: React.FC<IProps> = ({ interactor }) => {
  return (
    <Section id="hero" className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h1 className={styles.title}>{interactor.content.title}</h1>
            <h2 className={styles.subtitle}>{interactor.content.subtitle}</h2>

            <p className={styles.description}>{interactor.content.description}</p>
          </div>

          <div className={styles.buttonWrapper}>
            <Button fullWidth>MAKE AN ORDER</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
