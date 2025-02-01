import clsx from 'clsx';
import { motion, MotionConfig } from 'motion/react';

import { IEventsInteractor } from './interactor';
import { Container, Section } from '@/components/layout';
import { Link, Paragraph } from '@/components/ui';
import { PagePath } from '@/types';
import styles from './index.module.scss';
import { animation } from '@/utils/framer-animation';

export interface IProps {
  interactor: IEventsInteractor;
}

export const EventsRouter: React.FC<IProps> = ({ interactor }) => {
  return (
    <Section id="catering-and-events" className={styles.section}>
      <Container className={styles.container}>
        <MotionConfig transition={{ duration: 0.8, ease: 'easeInOut' }}>
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <motion.h2
                {...animation.slide([-30, 30])}
                className={clsx(styles.title, interactor.matches.isDesktop && 'hidden')}
              >
                {interactor.content.title}
              </motion.h2>

              <div className={styles.descriptionWrapper}>
                <motion.div {...animation.slide([30, -30])} viewport={{ amount: 0.7 }}>
                  <Paragraph
                    capitalize={interactor.matches.isDesktop}
                    className={styles.description}
                  >
                    {interactor.content.description}
                  </Paragraph>
                </motion.div>

                <motion.div {...animation.slide([-30, 30])} viewport={{ amount: 0.7 }}>
                  <Link
                    href={PagePath.Catering}
                    fullWidth={interactor.matches.isDesktop}
                    aria-label="Catering & Events"
                    className={styles.link}
                  >
                    {interactor.matches.isDesktop ? 'Catering & Events' : 'more'}
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </MotionConfig>
      </Container>
    </Section>
  );
};
