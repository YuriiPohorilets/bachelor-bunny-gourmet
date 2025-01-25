import clsx from 'clsx';

import { IEventsInteractor } from './interactor';
import { Container, Section } from '@/components/layout';
import { Link } from '@/components/ui';
import { PagePath } from '@/types';
import styles from './index.module.scss';

export interface IProps {
  interactor: IEventsInteractor;
}

export const EventsRouter: React.FC<IProps> = ({ interactor }) => {
  return (
    <Section id="catering-and-events" className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h2 className={clsx(styles.title, interactor.matches.isDesktop && 'hidden')}>
              {interactor.content.title}
            </h2>

            <div className={styles.descriptionWrapper}>
              <p className={styles.description}>{interactor.content.description}</p>

              <Link
                href={PagePath.Catering}
                fullWidth={interactor.matches.isDesktop}
                className={styles.link}
              >
                {interactor.matches.isDesktop ? 'Catering & Events' : 'more'}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
