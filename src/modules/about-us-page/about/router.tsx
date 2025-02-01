import Image from 'next/image';

import { IAboutInteractor } from './interactor';
import { Container, Section } from '@/components/layout';
import { Quote } from '@/components/common';
import Photo from '@/assets/images/about/photo.jpg';
import styles from './index.module.scss';
import { Paragraph } from '@/components/ui';

export interface IProps {
  interactor: IAboutInteractor;
}

export const AboutRouter: React.FC<IProps> = ({ interactor }) => {
  return (
    <Section id="about" className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className="hidden">About</h2>

          <div className={styles.videoWrapper}>
            <video
              src="videos/about-us.mp4"
              muted={true}
              loop={true}
              autoPlay={true}
              controls={false}
              webkit-playsinline="true"
              playsInline
              width={1106}
              height={609}
              className={styles.video}
            />
          </div>

          <div className={styles.content}>
            <Quote
              align={interactor.matches.isDesktop ? 'end' : 'start'}
              content={interactor.content.quote}
              className={styles.quote}
            />

            <div className={styles.imageWrapper}>
              <Image
                alt="Sophia Jennings"
                src={Photo}
                width={435}
                height={850}
                className={styles.image}
              />
            </div>

            <Paragraph className={styles.description}>{interactor.content.description}</Paragraph>
          </div>
        </div>
      </Container>
    </Section>
  );
};
