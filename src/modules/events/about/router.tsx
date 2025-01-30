import { IAboutInteractor } from './interactor';
import { Container, Section } from '@/components/layout';
import { Button } from '@/components/ui';
import styles from './index.module.scss';

export interface IProps {
  interactor: IAboutInteractor;
}
export const AboutRouter: React.FC<IProps> = ({ interactor }) => {
  return (
    <Section id="about" className={styles.section}>
      <div className={styles.videoWrapper}>
        <video
          src="videos/catering.mp4"
          muted={true}
          loop={true}
          autoPlay={true}
          controls={false}
          webkit-playsinline="true"
          playsInline
          width={1920}
          height={1080}
          className={styles.video}
        />
      </div>

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
