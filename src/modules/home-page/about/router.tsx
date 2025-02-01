import Image from 'next/image';
import { motion, MotionConfig } from 'motion/react';

import { IAboutInteractor } from './interactor';
import { Collapse, Container, Section } from '@/components/layout';
import { Quote } from '@/components/common';
import { Paragraph, MoreButton } from '@/components/ui';
import styles from './index.module.scss';
import { animation } from '@/utils/framer-animation';

export interface IProps {
  interactor: IAboutInteractor;
}

export const AboutRouter: React.FC<IProps> = ({ interactor }) => {
  const { matches, content, descriptionExpanded, handleDescriptionExpandToggle } = interactor;

  return (
    <Section id="about" className={styles.section} containerRef={interactor.sectionRef}>
      <Container className={styles.container}>
        <MotionConfig transition={{ duration: 0.8, ease: 'easeInOut' }}>
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <motion.div {...animation.slide([30, -30])} viewport={{ amount: 0.7 }}>
                <Quote
                  align={matches.isDesktop ? 'end' : 'start'}
                  content={content.title}
                  className={styles.qoute}
                />
              </motion.div>

              <motion.div
                {...animation.slide([-30, 30])}
                viewport={{ amount: 0.7 }}
                className={styles.descriptionWrapper}
              >
                <Paragraph className={styles.description}>{content.description[0]}</Paragraph>

                <Collapse open={matches.isDesktop || descriptionExpanded}>
                  <p className={styles.description}>{content.description[1]}</p>
                </Collapse>

                {!matches.isDesktop && (
                  <MoreButton
                    label={`read ${descriptionExpanded ? 'LESS' : 'MORE'}`}
                    onClick={handleDescriptionExpandToggle}
                  />
                )}
              </motion.div>
            </div>

            <motion.div style={{ y: interactor.photoY }} className={styles.imageWrapper}>
              <Image
                alt={content.image.alt}
                width={content.image.width}
                height={content.image.height}
                src={content.image.src}
              />
            </motion.div>
          </div>
        </MotionConfig>
      </Container>
    </Section>
  );
};
