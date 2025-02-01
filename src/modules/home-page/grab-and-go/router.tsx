import Image from 'next/image';
import clsx from 'clsx';
import { motion, MotionConfig } from 'motion/react';

import { IGrabAndGoInteractor } from './interactor';
import { Container, Section } from '@/components/layout';
import { Link, Paragraph } from '@/components/ui';
import { PagePath } from '@/types';
import styles from './index.module.scss';
import { animation } from '@/utils/framer-animation';

export interface IProps {
  interactor: IGrabAndGoInteractor;
}

export const GrabAndGoRouter: React.FC<IProps> = ({ interactor }) => {
  return (
    <Section id="grab-and-go" className={styles.section} containerRef={interactor.sectionRef}>
      <MotionConfig transition={{ duration: 0.8, ease: 'easeInOut' }}>
        <div className={styles.mediaWrapper}>
          {interactor.content.images.map((img, index) => (
            <motion.div
              key={img.id}
              className={clsx(styles.imageWrapper)}
              style={{ y: index === 0 ? interactor.imageBottomY : interactor.imageTopY }}
            >
              <Image alt={img.alt} src={img.src} width={img.width} height={img.height} />
            </motion.div>
          ))}
        </div>

        <Container className={styles.container}>
          <div className={styles.wrapper}>
            <motion.h2
              {...animation.slide([-30, 30])}
              viewport={{ amount: 0.5 }}
              className={styles.title}
            >
              {interactor.content.title}
            </motion.h2>

            <div className={styles.contentWrapper}>
              <h3 className={clsx(styles.subtitle, interactor.matches.isDesktop && 'hidden')}>
                {interactor.content.subtitle}
              </h3>

              <motion.div {...animation.slide([30, -30])}>
                <Paragraph capitalize={interactor.matches.isDesktop} className={styles.description}>
                  {interactor.content.description}
                </Paragraph>
              </motion.div>

              <motion.div {...animation.slide([-30, 30])} className={styles.link}>
                <Link
                  href={PagePath.GrabAndGo}
                  fullWidth={interactor.matches.isDesktop}
                  aria-label="Grab and go"
                >
                  {interactor.matches.isDesktop ? 'GRAB & GO' : 'more'}
                </Link>
              </motion.div>
            </div>
          </div>
        </Container>
      </MotionConfig>
    </Section>
  );
};
