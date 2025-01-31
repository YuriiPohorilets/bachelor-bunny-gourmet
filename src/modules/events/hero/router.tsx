import { Container, Section } from '@/components/layout';
import { Button } from '@/components/ui';
import styles from './index.module.scss';

import { IHeroInteractor } from './interactor';

export interface IProps {
  interactor: IHeroInteractor;
}

export const HeroRouter: React.FC<IProps> = ({ interactor }) => {
  return (
    <Section id="hero" className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>{interactor.content.title}</h1>
            <span className={styles.label}>{interactor.content.label}</span>
          </div>

          <div className={styles.content}>
            <p className={styles.description}>{interactor.content.description}</p>

            <Button fullWidth>{interactor.content.buttonLabel}</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
