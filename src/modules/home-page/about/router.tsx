import Image from 'next/image';

import { IAboutInteractor } from './interactor';
import { Collapse, Container, Section } from '@/components/layout';
import { Quote } from '@/components/common';
import styles from './index.module.scss';

export interface IProps {
  interactor: IAboutInteractor;
}

export const AboutRouter: React.FC<IProps> = ({ interactor }) => {
  const { matches, content, descriptionExpanded, handleDescriptionExpandToggle } = interactor;

  return (
    <Section id="about" className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <Quote
              align={matches.isDesktop ? 'end' : 'start'}
              content={content.title}
              className={styles.qoute}
            />

            <div className={styles.descriptionWrapper}>
              <p className={styles.description}>{content.description[0]}</p>

              <Collapse open={matches.isTablet ? true : descriptionExpanded}>
                <p className={styles.description}>{content.description[1]}</p>
              </Collapse>

              {!matches.isTablet && (
                <button
                  type="button"
                  onClick={handleDescriptionExpandToggle}
                  className={styles.readMoreButton}
                >
                  read {descriptionExpanded ? 'LESS' : 'MORE'}
                </button>
              )}
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              alt={content.image.alt}
              width={content.image.width}
              height={content.image.height}
              src={content.image.src}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};
