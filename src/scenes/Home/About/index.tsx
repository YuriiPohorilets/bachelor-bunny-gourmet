import Image from 'next/image';

import { Collapse, Container, Section } from '@/components/layout';
import { Quote } from '@/components/common';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MediaQuery } from '@/types';
import { content } from '@/constants/main-page-content';
import styles from './index.module.scss';

import ContentImage from '@/assets/images/home/about/about-content.png';
import { useState } from 'react';

export const About: React.FC = () => {
  const isDesktop = useMediaQuery(MediaQuery.Desktop);
  const isTablet = useMediaQuery(MediaQuery.Tablet);

  const [descriptionOpen, setDescriptionOpen] = useState<boolean>(false);

  return (
    <Section id="about" className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <Quote
              align={isDesktop ? 'end' : 'start'}
              content={content.about.title}
              className={styles.qoute}
            />

            <div className={styles.descriptionWrapper}>
              <p className={styles.description}>{content.about.description[0]}</p>

              <Collapse open={isTablet ? true : descriptionOpen}>
                <p className={styles.description}>{content.about.description[1]}</p>
              </Collapse>

              {!isTablet && (
                <button
                  type="button"
                  onClick={() => setDescriptionOpen(prevState => !prevState)}
                  className={styles.readMoreButton}
                >
                  read {descriptionOpen ? 'LESS' : 'MORE'}
                </button>
              )}
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <Image alt="Dish" width={1000} height={1000} src={ContentImage} />
          </div>
        </div>
      </Container>
    </Section>
  );
};
